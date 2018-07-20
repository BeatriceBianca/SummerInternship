package com.mindit.internship.controller;


import com.mindit.internship.models.Movie;
import com.mindit.internship.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
public class MovieController {

    @Autowired
    private MovieService movieService;

    @RequestMapping(value = "/getMovies", method = RequestMethod.GET)
    public ResponseEntity find(){
        List<Movie> m = movieService.find();
        if(m.size() == 0)
            return new ResponseEntity(null,HttpStatus.BAD_REQUEST);
        else return new ResponseEntity(m,HttpStatus.OK);
    }

    @RequestMapping(value = "/updateMovie", method = RequestMethod.POST)
    public ResponseEntity update(@RequestBody Movie movie){
        List<Movie> m = movieService.update(movie);
        if(m.size() == 0)
            return new ResponseEntity(null,HttpStatus.BAD_REQUEST);
        else return new ResponseEntity(m,HttpStatus.OK);
    }
}
