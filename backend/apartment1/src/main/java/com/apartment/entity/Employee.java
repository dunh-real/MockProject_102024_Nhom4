package com.apartment.entity;
import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 100, nullable = false)
    private String name;

    private Date birthDate;

    @Column(length = 100)
    private String email;

    @Column(length = 20)
    private String phoneNumber;

    @Column(length = 255)
    private String avatar;

    @Column(length = 100, nullable = false)
    private String username;

    @Column(length = 100, nullable = false)
    private String password;

    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "id")
    private Roles role;

    private Boolean status;

    // Getters and Setters
}
