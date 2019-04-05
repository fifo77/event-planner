package com.eventplannerapi.models.event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/api/events"})
public class EventController {
    @Autowired
    private EventService eventService;

    @PostMapping
    public Event create(@RequestBody Event event){
        return eventService.create(event);
    }

    @GetMapping(path = {"/{id}"})
    public Event findOne(@PathVariable("id") int id){
        return eventService.findById(id);
    }

    @PutMapping(path = {"/{id}"})
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
