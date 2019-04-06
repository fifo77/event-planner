package com.eventplannerapi.models.event_invitation;

import com.eventplannerapi.models.event.Event;
import com.eventplannerapi.models.event.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventInvitationServiceImpl implements EventInvitationService {
    @Autowired
    private EventInvitationRepository repository;

    @Override
    public EventInvitation create(EventInvitation invitation) {
        return repository.save(invitation);
    }

    @Override
    public EventInvitation delete(int id) {
        EventInvitation invitation = findById(id);
        if(invitation != null){
            repository.delete(invitation);
        }
        return invitation;
    }

    @Override
    public List<EventInvitation> findAll() {
        return repository.findAll();
    }

    @Override
    public EventInvitation findById(int id) {
        return repository.findById(id);
    }

    @Override
    public EventInvitation update(EventInvitation invitation) {
        return repository.save(invitation);
    }
}
