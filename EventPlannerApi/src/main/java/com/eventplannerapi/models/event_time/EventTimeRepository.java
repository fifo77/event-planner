package com.eventplannerapi.models.event_time;

import org.springframework.data.repository.Repository;

import java.util.List;

/**
 * Created by kubos on 6. 4. 2019.
 */
public interface EventTimeRepository extends Repository<EventTime, Integer> {
    void delete(EventTime user);

    List<EventTime> findAll();

    EventTime findById(int id);

    EventTime save(EventTime eventTime);
}
