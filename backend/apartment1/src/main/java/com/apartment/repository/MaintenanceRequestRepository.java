package com.apartment.repository;

import com.apartment.entity.MaintenanceRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MaintenanceRequestRepository extends JpaRepository<MaintenanceRequest, Integer> {
    List<MaintenanceRequest> findByEmployeeId(Integer employeeId);
}
