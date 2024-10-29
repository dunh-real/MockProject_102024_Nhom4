package com.example.demo.controller;

import com.example.demo.model.EmployeeContract;
import com.example.demo.repository.EmployeeContractRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RequestMapping("/api/employee-contract")
@RestController
public class EmployeeContractController {

    private final EmployeeContractRepository employeeContractRepository;

    // Lấy tất cả hợp đồng nhân viên
    @GetMapping
    public List<EmployeeContract> getEmployeeContracts() {
        return employeeContractRepository.findAll();
    }

    // Lấy một hợp đồng nhân viên cụ thể theo ID
    @GetMapping("/{id}")
    public ResponseEntity<EmployeeContract> getEmployeeContractById(@PathVariable Integer id) {
        Optional<EmployeeContract> contract = employeeContractRepository.findById(id);
        return contract.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Tạo hợp đồng nhân viên mới
    @PostMapping
    public ResponseEntity<EmployeeContract> createEmployeeContract(@RequestBody EmployeeContract employeeContract) {
        EmployeeContract savedContract = employeeContractRepository.save(employeeContract);
        return new ResponseEntity<>(savedContract, HttpStatus.CREATED);
    }

    // Cập nhật hợp đồng nhân viên hiện có
    @PutMapping("/{id}")
    public ResponseEntity<EmployeeContract> updateEmployeeContract(@PathVariable Integer id, @RequestBody EmployeeContract updatedContract) {
        return employeeContractRepository.findById(id)
                .map(existingContract -> {
                    BeanUtils.copyProperties(updatedContract, existingContract);
                    EmployeeContract savedContract = employeeContractRepository.save(existingContract);
                    return ResponseEntity.ok(savedContract);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Xóa hợp đồng nhân viên theo ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployeeContract(@PathVariable Integer id) {
        if (employeeContractRepository.existsById(id)) {
            employeeContractRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

