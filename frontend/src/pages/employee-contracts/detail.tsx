import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EmployeeContract } from "../../types/employee-contracts";
import { LoadingLottie } from "../../components";
import { Button } from "../../components/ui/button";

const EmployeeContractDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Fake contract data for testing
  const fakeContract: EmployeeContract = {
    id: Number(id),
    start_date: "2024-01-01",
    end_date: "2024-12-31",
    position: "Software Engineer",
    employee_id: 101,
  };

  // Initialize form data with fake data
  const [formData, setFormData] = useState<EmployeeContract>(fakeContract);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Update form data if fakeContract changes
  useEffect(() => {
    setFormData(fakeContract);
  }, [fakeContract]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "employee_id" || name === "id" ? Number(value) : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("Update contract successfully!"); // Set success message
    setTimeout(() => {
      // navigate("/employee-contracts");
    }, 2000);
  };

  // Display loading indicator
  if (!formData) {
    return (
      <div className="flex justify-center pt-10">
        <div className="w-[250px]">
          <LoadingLottie />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Employee Contract Details</h1>
      {successMessage && (
        <div className="p-4 mb-4 text-green-700 bg-green-100 rounded">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="position" className="block text-sm font-medium text-gray-700">
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
          <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">
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
          <label htmlFor="end_date" className="block text-sm font-medium text-gray-700">
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
          <label htmlFor="employee_id" className="block text-sm font-medium text-gray-700">
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
