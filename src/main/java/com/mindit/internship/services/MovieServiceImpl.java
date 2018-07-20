package com.mindit.internship.services;

import com.mindit.internship.models.Movie;
import com.mindit.internship.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieServiceImpl implements MovieService{

    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> find(){
        return movieRepository.findAll();
    }

    public List<Movie> update(Movie movie){
        List<Movie> m = movieRepository.findByMovieName(movie.getMovieName());
        m.get(0).setPrice(movie.getPrice());
        m.get(0).setDescription(movie.getDescription());
        movieRepository.save(m.get(0));
        return m;
    }
}
