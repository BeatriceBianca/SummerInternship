package com.mindit.internship.services;

import com.mindit.internship.models.Movie;

import java.util.List;

public interface MovieService {

    List<Movie> find();
    List<Movie> update(Movie movie);
}
