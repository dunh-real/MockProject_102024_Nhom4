package com.example.demo.repository;

import com.example.demo.model.EmployeeContract;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeContractRepository extends JpaRepository<EmployeeContract, Integer> {
}
