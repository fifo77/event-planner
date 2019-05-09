package com.eventplannerapi.models.event;

import com.eventplannerapi.models.event_time.EventTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        Event event = eventService.findById(id);
        return event;
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
}
