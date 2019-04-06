package com.eventplannerapi.models.user_event_time;

import org.springframework.data.repository.Repository;

import java.util.List;

/**
 * Created by kubos on 6. 4. 2019.
 */
public interface UserEventTimeRepository extends Repository<UserEventTime, Integer> {
    void delete(UserEventTime user);

    List<UserEventTime> findAll();

    UserEventTime findById(int id);

    UserEventTime save(UserEventTime event);
}
