package com.eventplannerapi.models.event;

import java.util.List;

public interface EventService {
    Event create(Event user);

    Event delete(int id);

    List<Event> findAll();

    Event findById(int id);

    Event update(Event event);
}
