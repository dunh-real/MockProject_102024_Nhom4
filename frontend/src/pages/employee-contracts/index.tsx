import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingLottie } from "../../components"; // Adjust the import as necessary
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
  // API hooks
  const {
    data: contracts = [], // Use the fetched contracts data
    isLoading,
  } = useGetAllEmployeeContractsQuery(undefined);

  // Fake data for testing
  const fakeContracts = [
    { id: 1, start_date: "2024-01-01", end_date: "2024-12-31", position: "Software Engineer", employee_id: 101 },
    { id: 2, start_date: "2024-02-01", end_date: "2024-11-30", position: "Product Manager", employee_id: 102 },
    { id: 3, start_date: "2024-03-01", end_date: "2024-10-31", position: "Data Analyst", employee_id: 103 },
    { id: 4, start_date: "2024-04-01", end_date: "2024-09-30", position: "UX Designer", employee_id: 104 },
  ];

  const [deleteEmployeeContract] = useDeleteEmployeeContractMutation();
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/employee-contracts/create"); // Replace with the route of the create page
  };

  // Error handling
  const [error, setError] = useState<string | null>(null);

  // Handle deleting a contract
  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this contract?");
    if (confirmed) {
      try {
        await deleteEmployeeContract(id).unwrap(); // Use unwrap to handle the promise properly
      } catch (error) {
        setError("Failed to delete contract.");
      }
    }
  };

  // Handle updating a contract
  const handleUpdate = (id: number) => {
    navigate(`/employee-contracts/update/${id}`);
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
      <div className="flex justify-center items-center mb-4 md:justify-end">
        <Button onClick={handleCreateClick}>New contract</Button>
      </div>
      {/* List of Contracts */}
      <DataTable
        columns={createColumns({ onDelete: handleDelete, onUpdate: handleUpdate })}
        data={contracts.length ? contracts : fakeContracts} // Use fake data if contracts are not fetched
      />
    </div>
  );
};

export default EmployeeContractManagement;
