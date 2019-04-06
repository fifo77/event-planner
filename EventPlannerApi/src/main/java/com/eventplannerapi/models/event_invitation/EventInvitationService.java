package com.eventplannerapi.models.event_invitation;

import java.util.List;

/**
 * Created by kubos on 6. 4. 2019.
 */
public interface EventInvitationService {
    EventInvitation create(EventInvitation user);

    EventInvitation delete(int id);

    List<EventInvitation> findAll();

    EventInvitation findById(int id);

    EventInvitation update(EventInvitation invitation);
}
