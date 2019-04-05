package com.eventplannerapi.models.event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository repository;

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
        return repository.findById(id);
    }

    @Override
    public Event update(Event event) {
        return repository.save(event);
    }

}
