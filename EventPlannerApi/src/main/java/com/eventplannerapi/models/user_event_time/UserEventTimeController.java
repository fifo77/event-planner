package com.eventplannerapi.models.user_event_time;
import com.eventplannerapi.models.event.Event;
import com.eventplannerapi.models.event_time.EventTime;
import com.eventplannerapi.models.event_time.EventTimeService;
import com.eventplannerapi.models.user.User;
import com.eventplannerapi.models.user.UserService;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/api/user_event_times"})
public class UserEventTimeController {
    private UserEventTimeService userEventTimeService;
    private EventTimeService eventTimeService;
    private UserService userService;

    @Autowired
    public UserEventTimeController(UserEventTimeService userEventTimeService, EventTimeService eventTimeService, UserService userService) {
        this.userEventTimeService = userEventTimeService;
        this.eventTimeService = eventTimeService;
        this.userService = userService;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST, produces = "application/json")
    public UserEventTime create(@RequestBody UserEventTime userEventTime){
        return userEventTimeService.create(userEventTime);
    }

    @GetMapping(path = {"/{id}"})
    public UserEventTime findOne(@PathVariable("id") int id){
        return userEventTimeService.findById(id);
    }

    @GetMapping(path = {"/get_by_invited_user/{id}"})
    public List<UserEventTime> findByInvitedUser(@PathVariable("id") int id){
        User user = userService.findById(id);
        return userEventTimeService.findByUser(user);
    }

    @GetMapping(path = {"/get_by_event_time/{id}"})
    public List<UserEventTime> findAllByEventTime(@PathVariable("id") int id){
        EventTime eventTime= eventTimeService.findById(id);
        return userEventTimeService.findByEventTime(eventTime);
    }

    @PutMapping(path = {"/{id}"})
    public UserEventTime update(@PathVariable("id") int id, @RequestBody UserEventTime userEventTime){
        userEventTime.setId(id);
        return userEventTimeService.update(userEventTime);
    }

    @DeleteMapping(path ={"/{id}"})
    public UserEventTime delete(@PathVariable("id") int id) {
        return userEventTimeService.delete(id);
    }

    @GetMapping
    public List<UserEventTime> findAll(){
        return userEventTimeService.findAll();
    }
}
