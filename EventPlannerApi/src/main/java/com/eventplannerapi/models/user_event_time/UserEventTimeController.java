package com.eventplannerapi.models.user_event_time;
import com.eventplannerapi.models.event_time.EventTime;
import com.eventplannerapi.models.event_time.EventTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/api/user_event_times"})
public class UserEventTimeController {
    @Autowired
    private UserEventTimeService invitationService;

    @PostMapping
    public UserEventTime create(@RequestBody UserEventTime userEventTime){
        return invitationService.create(userEventTime);
    }

    @GetMapping(path = {"/{id}"})
    public UserEventTime findOne(@PathVariable("id") int id){
        return invitationService.findById(id);
    }

    @PutMapping(path = {"/{id}"})
    public UserEventTime update(@PathVariable("id") int id, @RequestBody UserEventTime userEventTime){
        userEventTime.setId(id);
        return invitationService.update(userEventTime);
    }

    @DeleteMapping(path ={"/{id}"})
    public UserEventTime delete(@PathVariable("id") int id) {
        return invitationService.delete(id);
    }

    @GetMapping
    public List<UserEventTime> findAll(){
        return invitationService.findAll();
    }
}
