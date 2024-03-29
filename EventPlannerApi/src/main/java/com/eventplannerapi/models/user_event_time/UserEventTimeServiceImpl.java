package com.eventplannerapi.models.user_event_time;

import com.eventplannerapi.models.event_time.EventTime;
import com.eventplannerapi.models.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserEventTimeServiceImpl implements UserEventTimeService{
    @Autowired
    private UserEventTimeRepository repository;

    @Override
    public UserEventTime create(UserEventTime userEventTime) {
        return repository.save(userEventTime);
    }

    @Override
    public UserEventTime delete(int id) {
        UserEventTime userEventTime = findById(id);
        if(userEventTime != null){
            repository.delete(userEventTime);
        }
        return userEventTime;
    }

    @Override
    public List<UserEventTime> findAll() {
        return repository.findAll();
    }

    @Override
    public UserEventTime findById(int id) {
        return repository.findById(id);
    }

    @Override
    public List<UserEventTime> findByEventTime(EventTime eventTime) {
        return repository.findByEventTime(eventTime);
    }

    @Override
    public List<UserEventTime> findByUser(User id) {
        return repository.findByUser(id);
    }

    @Override
    public UserEventTime update(UserEventTime userEventTime) {
        return repository.save(userEventTime);
    }
}
