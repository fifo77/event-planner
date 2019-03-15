package com.eventplannerapi;

import org.springframework.data.repository.Repository;

import java.util.List;

/**
 * Created by kubos on 15. 3. 2019.
 */
public interface UserRepository extends Repository<User, Integer> {

    void delete(User user);

    List<User> findAll();

    User findById(int id);

    User save(User user);
}