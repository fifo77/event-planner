package com.eventplannerapi.models.event_invitation;

import org.springframework.data.repository.Repository;

import java.util.List;

/**
 * Created by kubos on 6. 4. 2019.
 */
public interface EventInvitationRepository extends Repository<EventInvitation, Integer> {
    void delete(EventInvitation user);

    List<EventInvitation> findAll();

    EventInvitation findById(int id);

    EventInvitation save(EventInvitation event);
}
