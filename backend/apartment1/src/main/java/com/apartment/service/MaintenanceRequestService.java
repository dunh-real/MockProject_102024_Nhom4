package com.apartment.service;

import com.apartment.entity.MaintenanceRequest;
import com.apartment.repository.MaintenanceRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class MaintenanceRequestService {
    private final MaintenanceRequestRepository maintenanceRequestRepository;


    public MaintenanceRequestService(MaintenanceRequestRepository maintenanceRequestRepository) {
        this.maintenanceRequestRepository = maintenanceRequestRepository;
    }

    public List<MaintenanceRequest> getRequestsByEmployeeId(Integer employeeId) {
        return maintenanceRequestRepository.findByEmployeeId(employeeId);
    }
}
