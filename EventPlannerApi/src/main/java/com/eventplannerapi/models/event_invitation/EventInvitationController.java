package com.eventplannerapi.models.event_invitation;

import com.eventplannerapi.mail.EmailServiceImpl;
import com.eventplannerapi.models.event.Event;
import com.eventplannerapi.models.event.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/api/event_invitations"})
public class EventInvitationController {
    @Autowired
    public EmailServiceImpl emailService;

    @Autowired
    private EventInvitationService invitationService;

    @PostMapping
    public EventInvitation create(@RequestBody EventInvitation invitation){
        EventInvitation eventInvitation = invitationService.create(invitation);
        String message = "You have been invited to an event!!\n\n\nEvent Name: " + eventInvitation.getEvent().getName() + "\n\n\nCheck it out on http://localhost:4200/events/register/" + eventInvitation.getEvent().getId();
        emailService.sendSimpleMessage(eventInvitation.getUser().getEmail(), "Event Invitation - " + eventInvitation.getEvent().getName(), message);
        return eventInvitation;
    }

    @GetMapping(path = {"/{id}"})
    public EventInvitation findOne(@PathVariable("id") int id){
        return invitationService.findById(id);
    }

    @PutMapping(path = {"/{id}"})
    public EventInvitation update(@PathVariable("id") int id, @RequestBody EventInvitation invitation){
        invitation.setId(id);
        return invitationService.update(invitation);
    }

    @DeleteMapping(path ={"/{id}"})
    public EventInvitation delete(@PathVariable("id") int id) {
        return invitationService.delete(id);
    }

    @GetMapping
    public List<EventInvitation> findAll(){
        return invitationService.findAll();
    }
}
