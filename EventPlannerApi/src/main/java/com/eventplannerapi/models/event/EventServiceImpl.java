package com.eventplannerapi.models.event;

import com.eventplannerapi.models.event_time.EventTimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository repository;

    @Autowired
    private EventTimeRepository repositoryEventTime;

    @Override
    public Event create(Event event) {
        return repository.save(event);
    }

    @Override
    public Event delete(int id) {
        Event event = findById(id);
        if(event != null){
            repository.delete(event);
        }
        return event;
    }

    @Override
    public List<Event> findAll() {
        return repository.findAll();
    }

    @Override
    public Event findById(int id) {
        Event event = repository.findById(id);
        //event.setEventTimes(repositoryEventTime.findByEvent(event));
        return repository.findById(id);
    }

    @Override
    public Event update(Event event) {
        return repository.save(event);
    }

    public List<Event> findByInvitedUser(int id) {
        return repository.findByInvitedUser(id);
    }

    public List<Event> findUpcoming(String date) {
        return repository.findUpcoming(date);
    }

    public List<Event> findForUser(int userId) {
        return repository.findForUser(userId);
    }
}
