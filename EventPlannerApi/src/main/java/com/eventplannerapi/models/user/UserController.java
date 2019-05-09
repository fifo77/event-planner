package com.eventplannerapi.models.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping({"/api/users"})
public class UserController {
    @Autowired
    private UserService userService;

    static final Logger LOG = LoggerFactory.getLogger(UserController.class);

    @PostMapping
    public User create(@RequestBody User user){
        LOG.info("CREATING USER" + user.getUserName());
        return userService.create(user);
    }

    @GetMapping(path = {"/{id}"})
    public User findOne(@PathVariable("id") int id){
        return userService.findById(id);
    }


    @GetMapping(path = {"/username/{name}"})
    public User findOneByUsername(@PathVariable("name") String name){
        return userService.findByUserName(name);
    }

    @PutMapping(path = {"/{id}"})
    public User update(@PathVariable("id") int id, @RequestBody User user){
        LOG.info("UPDATING USER" + id);
        user.setId(id);
        return userService.update(user);
    }

    @DeleteMapping(path ={"/{id}"})
    public User delete(@PathVariable("id") int id) {
        LOG.info("DELETING USER" + id);
        return userService.delete(id);
    }

    @GetMapping
    public List<User> findAll(){
        LOG.info("FETCHING ALL USERS");
        return userService.findAll();
    }
}