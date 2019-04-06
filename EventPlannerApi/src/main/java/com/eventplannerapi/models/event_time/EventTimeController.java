package com.eventplannerapi.models.event_time;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/api/event_times"})
public class EventTimeController {
    @Autowired
    private EventTimeService invitationService;

    @PostMapping
    public EventTime create(@RequestBody EventTime eventTime){
        return invitationService.create(eventTime);
    }

    @GetMapping(path = {"/{id}"})
    public EventTime findOne(@PathVariable("id") int id){
        return invitationService.findById(id);
    }

    @PutMapping(path = {"/{id}"})
    public EventTime update(@PathVariable("id") int id, @RequestBody EventTime eventTime){
        eventTime.setId(id);
        return invitationService.update(eventTime);
    }

    @DeleteMapping(path ={"/{id}"})
    public EventTime delete(@PathVariable("id") int id) {
        return invitationService.delete(id);
    }

    @GetMapping
    public List<EventTime> findAll(){
        return invitationService.findAll();
    }
}
