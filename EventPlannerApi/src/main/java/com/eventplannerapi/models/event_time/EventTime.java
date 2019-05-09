package com.eventplannerapi.models.event_time;
import com.eventplannerapi.models.event.Event;
import com.eventplannerapi.models.event_invitation.EventInvitation;
import com.eventplannerapi.models.user.User;
import com.eventplannerapi.models.user_event_time.UserEventTime;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "event_times")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class EventTime {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "event_id", insertable = false, updatable = false)
    private Event event;

    @Basic
    @Column(name = "time_start")
    private java.sql.Timestamp timeStart;

    @Basic
    @Column(name = "time_end")
    private java.sql.Timestamp timeEnd;

    @Column
    private Integer capacity;

//    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    @JoinColumn(name = "event_time")
//    private List<UserEventTime> userEventTimes;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

//    public Event getEvent() {
//        return event;
//    }
//
//    public void setEvent(Event event) {
//        this.event = event;
//    }

    public Timestamp getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(Timestamp timeStart) {
        this.timeStart = timeStart;
    }

    public Timestamp getTimeEnd() {
        return timeEnd;
    }

    public void setTimeEnd(Timestamp timeEnd) {
        this.timeEnd = timeEnd;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

//    public List<UserEventTime> getUserEventTimes() {
//        return userEventTimes;
//    }
//
//    public void setUserEventTimes(List<UserEventTime> userEventTimes) {
//        this.userEventTimes = userEventTimes;
//    }
}
