package com.eventplannerapi.models.event_time;

import com.eventplannerapi.models.event.Event;

import java.util.List;

public interface EventTimeService {
    EventTime create(EventTime user);

    EventTime delete(int id);

    List<EventTime> findAll();

    EventTime findById(int id);

    List<EventTime> findByEvent(Event event);

    EventTime update(EventTime event);
}
