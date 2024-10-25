package com.apartment.controller;

import com.apartment.entity.MaintenanceRequest;
import com.apartment.service.MaintenanceRequestService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/maintenance-requests")
public class MaintenanceRequestController {
    private final MaintenanceRequestService maintenanceRequestService;

    public MaintenanceRequestController(MaintenanceRequestService maintenanceRequestService) {
        this.maintenanceRequestService = maintenanceRequestService;
    }


    @GetMapping("/employee/{employeeId}")
    public List<MaintenanceRequest> getRequestsByEmployeeId(@PathVariable Integer employeeId) {
        return maintenanceRequestService.getRequestsByEmployeeId(employeeId);
    }
}
