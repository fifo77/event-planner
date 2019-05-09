package com.eventplannerapi.models.event_time;

import com.eventplannerapi.models.event.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventTimeServiceImpl implements EventTimeService {
    @Autowired
    private EventTimeRepository repository;

    @Override
    public EventTime create(EventTime eventTime) {
        return repository.save(eventTime);
    }

    @Override
    public EventTime delete(int id) {
        EventTime eventTime = findById(id);
        if(eventTime != null){
            repository.delete(eventTime);
        }
        return eventTime;
    }

    @Override
    public List<EventTime> findAll() {
        return repository.findAll();
    }

    @Override
    public EventTime findById(int id) {
        return repository.findById(id);
    }

    @Override
    public List<EventTime> findByEvent(Event event) {
        List<EventTime> eventTimes = repository.findByEvent(event);
        for (int i = 0; i < eventTimes.size(); i++) {
            //EventTime eventTime = eventTimes[i];

        }
        //eventTime.setUserEventTimes();
        return eventTimes;
    }

    @Override
    public EventTime update(EventTime eventTime) {
        return repository.save(eventTime);
    }
}
