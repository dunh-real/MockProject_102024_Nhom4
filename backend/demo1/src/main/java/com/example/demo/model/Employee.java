package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Employee {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Nationalized
    @Column(name = "name", length = 100)
    private String name;

    @Column(name = "birth_date")
    private LocalDate birthDate;

    @Nationalized
    @Column(name = "email", length = 100)
    private String email;

    @Nationalized
    @Column(name = "phone_number", length = 20)
    private String phoneNumber;

    @Nationalized
    @Column(name = "avatar")
    private String avatar;

    @Nationalized
    @Column(name = "username", length = 100)
    private String username;

    @Nationalized
    @JsonIgnore
    @Column(name = "password", length = 100)
    private String password;

    @Column(name = "status")
    private Boolean status;

}