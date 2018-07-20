package com.mindit.internship.controller;


import com.mindit.internship.models.Users;
import com.mindit.internship.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

import javax.swing.plaf.PanelUI;
import java.util.List;

@Controller
public class UsersController {

    @Autowired
    private UsersService usersService;

    @RequestMapping(value = "/addUser", method = RequestMethod.PUT)
    public RedirectView addUser(@RequestBody Users user){
        usersService.addUser(user);
        return new RedirectView("http://localhost:8090/login");
    }

    @RequestMapping(value = "/verifylogin", method = RequestMethod.GET)
    public ResponseEntity login(@RequestParam String username, @RequestParam String password){
        List<Users> l =usersService.login(username, password);
        if(l.size() == 0)
            return new ResponseEntity(null,HttpStatus.BAD_REQUEST);
        else return new ResponseEntity(l.get(0),HttpStatus.OK);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity deleteUser(@RequestBody Users user){
        usersService.deleteUser(user);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "/find", method = RequestMethod.GET)
    public ResponseEntity find(@RequestParam String username){
        List<Users> u = usersService.find(username);
        if(u.size() == 0)
            return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
        else return new ResponseEntity(u.get(0), HttpStatus.OK);
    }
}
