package com.mindit.internship.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@ComponentScan({"com.mindit.internship.controller"})
@EnableJpaRepositories("com.mindit.internship.repository")
@EntityScan(basePackages = {"com.mindit.internship.model"})
@EnableScheduling
@Configuration
public class SummerInternshipApplication {

    public static void main(String[] args) {
        SpringApplication.run(SummerInternshipApplication.class, args);
    }

}
