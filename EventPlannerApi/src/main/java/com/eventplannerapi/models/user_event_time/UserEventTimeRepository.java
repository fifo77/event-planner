package com.eventplannerapi.models.user_event_time;

import com.eventplannerapi.models.event_time.EventTime;
import com.eventplannerapi.models.user.User;
import org.springframework.data.repository.Repository;

import java.util.List;

/**
 * Created by kubos on 6. 4. 2019.
 */
public interface UserEventTimeRepository extends Repository<UserEventTime, Integer> {
    void delete(UserEventTime user);

    List<UserEventTime> findAll();

    List<UserEventTime> findByEventTime(EventTime eventTime);

    UserEventTime findById(int id);

    List<UserEventTime> findByUser(User id);

    UserEventTime save(UserEventTime event);
}
