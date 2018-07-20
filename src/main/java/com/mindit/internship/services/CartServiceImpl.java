package com.mindit.internship.services;

import com.mindit.internship.models.Cart;
import com.mindit.internship.models.Movie;
import com.mindit.internship.repositories.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    public void addCart(Cart movie){
        cartRepository.save(movie);
    }

    public List<Cart> showCart(String userName){
        return cartRepository.findByUserName(userName);
    }

    public void deleteCart(Cart cart) { cartRepository.delete(cart);}

    public List<Cart> find() { return cartRepository.findAll();}
}
