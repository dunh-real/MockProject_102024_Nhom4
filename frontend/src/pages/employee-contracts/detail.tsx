import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EmployeeContract } from "../../types/employee-contracts";
import { LoadingLottie } from "../../components"; // Import loading animation if needed
import {
  useGetEmployeeContractByIdQuery,
  useUpdateEmployeeContractMutation,
} from "../../store/api/endpoints/employeeContractApi";
import { Button } from "../../components/ui/button";

const EmployeeContractDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Fetch contract data using the ID from the URL
  const {
    data: contract,
    isLoading,
    isError,
  } = useGetEmployeeContractByIdQuery(Number(id));
  const [updateEmployeeContract] = useUpdateEmployeeContractMutation();

  // Local state to manage form data
  const [formData, setFormData] = useState<EmployeeContract>({
    id: 0,
    start_date: "",
    end_date: "",
    position: "",
    employee_id: 0,
  });

  useEffect(() => {
    if (contract) {
      setFormData(contract); // Initialize form data with fetched contract data
    }
  }, [contract]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (formData) {
      setFormData({
        ...formData,
        [name]: name === "employee_id" || name === "id" ? Number(value) : value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      try {
        await updateEmployeeContract({
          id: formData.id,
          contract: formData as EmployeeContract,
        }).unwrap();
        navigate("/employee-contracts"); // Redirect to the contracts page after update
      } catch (error) {
        console.error("Failed to update contract:", error);
      }
    }
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

  // Display error if loading contract data fails
  if (isError || !formData) {
    return <div>Failed to load contract details.</div>;
  }

  // Render form to view and update contract details
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Employee Contract Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-700"
          >
            Position
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label
            htmlFor="start_date"
            className="block text-sm font-medium text-gray-700"
          >
            Start Date
          </label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label
            htmlFor="end_date"
            className="block text-sm font-medium text-gray-700"
          >
            End Date
          </label>
          <input
            type="date"
            id="end_date"
            name="end_date"
            value={formData.end_date}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label
            htmlFor="employee_id"
            className="block text-sm font-medium text-gray-700"
          >
            Employee ID
          </label>
          <input
            type="number"
            id="employee_id"
            name="employee_id"
            value={formData.employee_id}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit">Update Contract</Button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeContractDetails;
