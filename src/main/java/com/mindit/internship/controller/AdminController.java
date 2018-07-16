package com.mindit.internship.controller;

import com.mindit.internship.models.Admin;
import com.mindit.internship.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@Controller
public class AdminController {

    @Autowired
    private AdminService adminService;

    @RequestMapping(value = "/addAdmin", method = RequestMethod.PUT)
    public RedirectView addUser(@RequestBody Admin admin){
        adminService.addAdmin(admin);
        return new RedirectView("http://localhost:8090/login");
    }

    @RequestMapping(value = "/verifyadminlogin", method = RequestMethod.GET)
    public ResponseEntity login(@RequestParam String username, @RequestParam String password){
        List<Admin> l =adminService.login(username, password);
        if(l.size() == 0)
            return new ResponseEntity(null,HttpStatus.BAD_REQUEST);
        else return new ResponseEntity(l.get(0),HttpStatus.OK);
    }
}
