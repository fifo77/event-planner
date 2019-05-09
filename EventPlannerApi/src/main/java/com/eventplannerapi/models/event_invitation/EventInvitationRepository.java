package com.eventplannerapi.models.event_invitation;

import com.eventplannerapi.models.event.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;

/**
 * Created by kubos on 6. 4. 2019.
 */
public interface EventInvitationRepository extends JpaRepository<EventInvitation, Integer> {
    void delete(EventInvitation user);

    List<EventInvitation> findAll();

    EventInvitation findById(int id);

    EventInvitation save(EventInvitation event);

    @Query(value = "SELECT * FROM event_invitations as ei WHERE ei.event_id = ?1", nativeQuery = true)
    List<EventInvitation> findByEvent(int id);

}
