package com.apartment.entity;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "MaintenanceRequest")
public class MaintenanceRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private Date date;

    @Column(length = 255)
    private String description;

    @Column(length = 50)
    private String status;

    @ManyToOne
    @JoinColumn(name = "resident_id", referencedColumnName = "id")
    private Resident resident;

    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    private Employee employee;
}
