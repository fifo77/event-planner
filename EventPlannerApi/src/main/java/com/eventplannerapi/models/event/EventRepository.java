package com.eventplannerapi.models.event;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface EventRepository extends JpaRepository<Event, Integer> {
    void delete(Event user);

    List<Event> findAll();

    Event findById(int id);

    Event save(Event event);

    @Query(value = "SELECT * FROM events as e LEFT JOIN event_invitations as ei ON ei.event_id = e.id WHERE ei.user_id = ?1", nativeQuery = true)
    List<Event> findByInvitedUser(int id);

    @Query(value = "SELECT e.* FROM events as e LEFT JOIN event_times as et ON et.event_id = e.id WHERE et.time_start > '2019-05-09' group by e.id", nativeQuery = true)
    List<Event> findUpcoming(String time);

    @Query(value = "select * from events as e left join event_times as et on et.event_id = e.id left join user_event_times as uet on uet.event_time = et.id where uet.user_id = ?1", nativeQuery = true)
    List<Event> findForUser(int id);
}
