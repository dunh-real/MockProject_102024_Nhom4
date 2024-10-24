package com.example.demo.controller;

import com.example.demo.model.EmployeeContract;
import com.example.demo.repository.EmployeeContractRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@AllArgsConstructor
@RequestMapping("/api/employee-contract")
@RestController
public class EmployeeContractController {

    private final EmployeeContractRepository employeeContractRepository;

    @GetMapping
    public List<EmployeeContract> getEmployeeContracts() {
        return employeeContractRepository.findAll();
    }
}
