package com.eventplannerapi.models.event_invitation;

import com.eventplannerapi.models.event.Event;
import com.eventplannerapi.models.event.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/api/event_invitations"})
public class EventInvitationController {
    @Autowired
    private EventInvitationService invitationService;

    @PostMapping
    public EventInvitation create(@RequestBody EventInvitation invitation){
        return invitationService.create(invitation);
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
