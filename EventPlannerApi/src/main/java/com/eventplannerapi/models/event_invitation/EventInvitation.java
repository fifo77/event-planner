package com.eventplannerapi.models.event_invitation;

import com.eventplannerapi.models.event.Event;
import com.eventplannerapi.models.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "event_invitations")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class EventInvitation {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn()
    private Event event;

    @Column
    private Integer required_attendance;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Integer getRequired_attendance() {
        return required_attendance;
    }

    public void setRequired_attendance(Integer required_attendance) {
        this.required_attendance = required_attendance;
    }
}
