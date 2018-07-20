package com.mindit.internship.controller;

import com.mindit.internship.models.Cart;
import com.mindit.internship.services.CartService;
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
public class CartController {

    @Autowired
    private CartService cartService;

    @RequestMapping(value = "/addMovie", method = RequestMethod.PUT)
    public RedirectView addCart(@RequestBody Cart movie){

        cartService.addCart(movie);
        return new RedirectView("http://localhost:8090/cart");
    }

    @RequestMapping(value = "/showMovie", method = RequestMethod.GET)
    public ResponseEntity showMovie(@RequestParam String userName){
        List<Cart> c = cartService.showCart(userName);
        if(c.size() == 0)
            return new ResponseEntity(null,HttpStatus.BAD_REQUEST);
        else return new ResponseEntity(c,HttpStatus.OK);
    }

    @RequestMapping(value = "/deleteCart", method = RequestMethod.POST)
    public ResponseEntity deleteCart(@RequestBody Cart cart){
        cartService.deleteCart(cart);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "/showOrder", method = RequestMethod.GET)
    public ResponseEntity find(){
        List<Cart> c = cartService.find();
        if(c.size() == 0)
            return new ResponseEntity(null,HttpStatus.BAD_REQUEST);
        else return new ResponseEntity(c,HttpStatus.OK);
    }
}
