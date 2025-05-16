package org.example.controller;


import org.example.model.StudentDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class controller {

    @PostMapping("/create-student-details")
    void createStudentDetails(@RequestBody StudentDetails studentDetails){



    }



}
