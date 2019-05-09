package com.eventplannerapi.models.event;

import com.eventplannerapi.models.event_time.EventTimeService;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
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
    private EventService eventService;
    @Autowired
    private EventTimeService eventTimeService;

    @RequestMapping(value = "/create", method = RequestMethod.POST, produces = "application/json")
    public Event create(@RequestBody Event event){
        System.out.println("afoj");
        System.out.println(event);
        return eventService.create(event);
    }

    @GetMapping(path = {"/{id}"})
    public Event findOne(@PathVariable("id") int id){
        return eventService.findById(id);
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT, produces = "application/json")
    public Event update(@PathVariable("id") int id, @RequestBody Event event){
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
