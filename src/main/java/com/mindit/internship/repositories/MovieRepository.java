package com.mindit.internship.repositories;

import com.mindit.internship.models.Movie;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MovieRepository extends CrudRepository<Movie,Integer> {

    List<Movie> findAll();
    List<Movie> findByMovieName(String movieName);
}
