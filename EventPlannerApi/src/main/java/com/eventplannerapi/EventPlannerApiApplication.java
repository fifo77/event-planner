package com.eventplannerapi;

import org.apache.log4j.PropertyConfigurator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EventPlannerApiApplication {

	public static void main(String[] args) {
		//BasicConfigurator.configure();
		PropertyConfigurator.configure("src/log4j.properties");
		SpringApplication.run(EventPlannerApiApplication.class, args);
	}

}
