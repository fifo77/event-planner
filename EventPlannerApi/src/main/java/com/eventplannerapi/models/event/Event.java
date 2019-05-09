package com.eventplannerapi.models.event;

import com.eventplannerapi.models.event_invitation.EventInvitation;
import com.eventplannerapi.models.event_time.EventTime;
import com.eventplannerapi.models.user.User;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "events")
public class Event {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    @JoinColumn
    private User organisator;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private Boolean closed_event;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "event_id")
    private List<EventTime> eventTimes;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "event_id")
    private List<EventInvitation> eventInvitations;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getClosed_event() {
        return closed_event;
    }

    public void setClosed_event(Boolean closed_event) {
        this.closed_event = closed_event;
    }

    public User getOrganisator() {
        return organisator;
    }

    public void setOrganisator(User organisator) {
        this.organisator = organisator;
    }

    public List<EventTime> getEventTimes() {
        return this.eventTimes;
    }

    public void setEventTimes(List<EventTime> eventTimes) {
        this.eventTimes = eventTimes;
    }

//    public List<EventInvitation> getEventInvitations() {
//        return eventInvitations;
//    }
//
//    public void setEventInvitations(List<EventInvitation> eventInvitations) {
//        this.eventInvitations = eventInvitations;
//    }
}