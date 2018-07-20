package com.mindit.internship.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping(value = "/home")
    public String getHomePage() { return "homepage";}

    @RequestMapping(value = "/login")
    public String getLoginPage() {
        return "login";
    }

    @RequestMapping(value = "/register")
    public String getRegisterPage() { return "register";}

    @RequestMapping(value = "/adminregister")
    public String getAdminRegisterPage() { return "adminregister";}

    @RequestMapping(value = "/adminlogin")
    public String getAdminLogin() { return "adminlogin";}

    @RequestMapping(value ="/firstpage")
    public String getFirstPage() {return "firstpage";}

    @RequestMapping(value = "/profilepage")
    public String getProfilePage() {return "profilepage";}

    @RequestMapping(value = "/cart")
    public String getCartPage() {return "/cart";}

    @RequestMapping(value = "/adminfirstpage")
    public String getAdminFirstPage() {return "/adminfirstpage";}

    @RequestMapping(value = "/order")
    public String getOrder() {return "/order";}

    @RequestMapping(value = "/adminprofilepage")
    public String getAdminProfilePage() {return "/adminprofilepage";}
}
