import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingLottie } from "../../components";
import {
  useGetAllEmployeeContractsQuery,
  useDeleteEmployeeContractMutation,
} from "../../store/api/endpoints/employeeContractApi";
import { DataTable } from "./components/data-table";
import { createColumns } from "./components/columns";
import { Button } from "../../components/ui/button";
import { useDispatch } from "react-redux";
import { setBreadCrumb } from "../../store/slice/app";

const EmployeeContractManagement: React.FC = () => {
  const dispatch = useDispatch();
  dispatch(
    setBreadCrumb([
      {
        title: "Dashboard",
        link: "/dashboard",
      },
      {
        title: "Employee contracts",
        link: "/employee-contracts",
      },
    ])
  );

  const { data: apiContracts = [], isLoading } =
    useGetAllEmployeeContractsQuery(undefined);

  // Fake data for testing
  const fakeContracts = [
    {
      id: 1,
      start_date: "2024-01-01",
      end_date: "2024-12-31",
      position: "Software Engineer",
      employee_id: 101,
    },
    {
      id: 2,
      start_date: "2024-02-01",
      end_date: "2024-11-30",
      position: "Product Manager",
      employee_id: 102,
    },
    {
      id: 3,
      start_date: "2024-03-01",
      end_date: "2024-10-31",
      position: "Data Analyst",
      employee_id: 103,
    },
    {
      id: 4,
      start_date: "2024-04-01",
      end_date: "2024-09-30",
      position: "UX Designer",
      employee_id: 104,
    },
    {
      id: 5,
      start_date: "2024-05-01",
      end_date: "2024-08-31",
      position: "QA Engineer",
      employee_id: 105,
    },
    {
      id: 6,
      start_date: "2024-06-01",
      end_date: "2024-07-31",
      position: "Frontend Developer",
      employee_id: 106,
    },
    {
      id: 7,
      start_date: "2024-07-01",
      end_date: "2025-01-31",
      position: "Backend Developer",
      employee_id: 107,
    },
    {
      id: 8,
      start_date: "2024-08-01",
      end_date: "2025-02-28",
      position: "Database Admin",
      employee_id: 108,
    },
    {
      id: 9,
      start_date: "2024-09-01",
      end_date: "2025-03-31",
      position: "System Analyst",
      employee_id: 109,
    },
    {
      id: 10,
      start_date: "2024-10-01",
      end_date: "2025-04-30",
      position: "Network Engineer",
      employee_id: 110,
    },
    {
      id: 11,
      start_date: "2024-11-01",
      end_date: "2025-05-31",
      position: "DevOps Engineer",
      employee_id: 111,
    },
    {
      id: 12,
      start_date: "2024-12-01",
      end_date: "2025-06-30",
      position: "Full Stack Developer",
      employee_id: 112,
    },
    {
      id: 13,
      start_date: "2025-01-01",
      end_date: "2025-07-31",
      position: "Mobile Developer",
      employee_id: 113,
    },
    {
      id: 14,
      start_date: "2025-02-01",
      end_date: "2025-08-31",
      position: "Data Scientist",
      employee_id: 114,
    },
    {
      id: 15,
      start_date: "2025-03-01",
      end_date: "2025-09-30",
      position: "Business Analyst",
      employee_id: 115,
    },
    {
      id: 16,
      start_date: "2025-04-01",
      end_date: "2025-10-31",
      position: "Machine Learning Engineer",
      employee_id: 116,
    },
    {
      id: 17,
      start_date: "2025-05-01",
      end_date: "2025-11-30",
      position: "Cloud Architect",
      employee_id: 117,
    },
    {
      id: 18,
      start_date: "2025-06-01",
      end_date: "2025-12-31",
      position: "Technical Writer",
      employee_id: 118,
    },
    {
      id: 19,
      start_date: "2025-07-01",
      end_date: "2026-01-31",
      position: "Project Coordinator",
      employee_id: 119,
    },
    {
      id: 20,
      start_date: "2025-08-01",
      end_date: "2026-02-28",
      position: "HR Specialist",
      employee_id: 120,
    },
  ];

  const [deleteEmployeeContract] = useDeleteEmployeeContractMutation();
  const navigate = useNavigate();
  const [localContracts, setLocalContracts] = useState(fakeContracts);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const handleCreateClick = () => {
    navigate("/employee-contracts/create"); // Replace with the route of the create page
  };

  // Error handling
  const [error, setError] = useState<string | null>(null);

  // Handle deleting a contract
  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this contract?"
    );
    if (confirmed) {
      setLocalContracts((prevContracts) =>
        prevContracts.filter((contract) => contract.id !== id)
      );
      setSuccessMessage("Delete successfully!");
      setTimeout(() => setSuccessMessage(null), 3000);
    }
  };

  // Handle updating a contract
  const handleUpdate = (id: number) => {
    navigate(`/employee-contracts/details/${id}`);
  };

  // Display loading indicator
  if (isLoading) {
    return (
      <div className="flex justify-center pt-10">
        <div className="w-[250px]">
          <LoadingLottie />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Employee Contracts</h1>
      {successMessage && (
        <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
          {successMessage}
        </div>
      )}
      <div className="flex justify-center items-center mb-4 md:justify-end">
        <Button onClick={handleCreateClick}>New contract</Button>
      </div>
      {/* List of Contracts */}
      <DataTable
        columns={createColumns({
          onDelete: handleDelete,
          onUpdate: handleUpdate,
        })}
        data={apiContracts.length ? localContracts : fakeContracts} // Use fake data if contracts are not fetched
      />
    </div>
  );
};

export default EmployeeContractManagement;
