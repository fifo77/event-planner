package com.eventplannerapi;

import java.util.List;

/**
 * Created by kubos on 15. 3. 2019.
 */
public interface UserService {

    User create(User user);

    User delete(int id);

    List<User> findAll();

    User findById(int id);

    User findByUserName(String username);

    User update(User user);
}