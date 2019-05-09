package com.eventplannerapi.models.event;

import com.eventplannerapi.mail.EmailServiceImpl;
import com.eventplannerapi.models.event_invitation.EventInvitation;
import com.eventplannerapi.models.event_invitation.EventInvitationController;
import com.eventplannerapi.models.event_invitation.EventInvitationService;
import com.eventplannerapi.models.event_time.EventTimeService;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.provider.HibernateUtils;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping({"/api/events"})
public class EventController {
    @Autowired
    public EmailServiceImpl emailService;

    static final Logger LOG = Logger.getLogger(EventInvitationController.class);

    @Autowired
    private EventService eventService;
    @Autowired
    private EventTimeService eventTimeService;
    @Autowired
    private EventInvitationService eventInvitationService;

    @RequestMapping(value = "/create", method = RequestMethod.POST, produces = "application/json")
    public Event create(@RequestBody Event event){
        Event eventCreated = eventService.create(event);
        List<EventInvitation> invitations = eventCreated.getEventInvitations();
        for (int i = 0; i < invitations.size(); i++) {
            EventInvitation eventInvitation = invitations.get(i);
            System.out.println("EventInvitation " + invitations.get(i).getUser().getEmail());
            LOG.info("Sending inviatation to " + eventInvitation.getUser().getEmail());
            String message = "You have been invited to an event!!\n\n\nEvent Name: " + eventCreated.getName() + "\n\n\nCheck it out on http://localhost:4200/events/register/" + eventCreated.getId();
            emailService.sendSimpleMessage(eventInvitation.getUser().getEmail(), "Event Invitation - " + eventCreated.getName(), message);
        }
        return eventCreated;
    }

    @GetMapping(path = {"/{id}"})
    public Event findOne(@PathVariable("id") int id){
        return eventService.findById(id);
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT, produces = "application/json")
    public Event update(@PathVariable("id") int id, @RequestBody Event event){
        List<EventInvitation> invitations = event.getEventInvitations();

        event.setId(id);
        return eventService.update(event);
    }

    @DeleteMapping(path ={"/{id}"})
    public Event delete(@PathVariable("id") int id) {
        return eventService.delete(id);
    }

    @GetMapping
    public List<Event> findAll(){
        return eventService.findAll();
    }

    @GetMapping(path ={"/get_invited_user/{id}"})
    public List<Event> findInvited(@PathVariable("id") int id){
        return eventService.findByInvitedUser(id);
    }

    @GetMapping(path ={"/upcoming"})
    public List<Event> findUpcoming(){
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        System.out.println(dateFormat.format(date));
        return eventService.findUpcoming(dateFormat.format(date));
    }

    @GetMapping(path ={"/for_user/{id}"})
    public List<Event> findForUser(@PathVariable("id") int id){
        return eventService.findForUser(id);
    }
}
