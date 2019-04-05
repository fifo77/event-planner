package com.eventplannerapi.models.event;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface EventRepository extends Repository<Event, Integer>{
    void delete(Event user);

    List<Event> findAll();

    Event findById(int id);

    Event save(Event event);
}
