package com.eventplannerapi.models.user_event_time;

import com.eventplannerapi.models.event_invitation.EventInvitation;
import com.eventplannerapi.models.event_time.EventTime;
import com.eventplannerapi.models.user.User;

import java.util.List;

/**
 * Created by kubos on 6. 4. 2019.
 */
public interface UserEventTimeService {
    UserEventTime create(UserEventTime user);

    UserEventTime delete(int id);

    List<UserEventTime> findAll();

    UserEventTime findById(int id);

    List<UserEventTime> findByEventTime(EventTime eventTime);

    List<UserEventTime> findByUser(User id);

    UserEventTime update(UserEventTime eventTime);
}
