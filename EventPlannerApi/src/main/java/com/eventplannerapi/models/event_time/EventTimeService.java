package com.eventplannerapi.models.event_time;

import java.util.List;

public interface EventTimeService {
    EventTime create(EventTime user);

    EventTime delete(int id);

    List<EventTime> findAll();

    EventTime findById(int id);

    EventTime update(EventTime event);
}
