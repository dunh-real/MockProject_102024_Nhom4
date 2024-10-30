// src/pages/employee-contracts/CreateEmployeeContract.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeContract } from "../../types/employee-contracts";
import { useCreateEmployeeContractMutation } from "../../store/api/endpoints/employeeContractApi";
import { Button } from "../../components/ui/button";
import { useDispatch } from "react-redux";
import { setBreadCrumb } from "../../store/slice/app";

const CreateEmployeeContract: React.FC = () => {
  const navigate = useNavigate();
  const [createEmployeeContract] = useCreateEmployeeContractMutation();
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

  const [newContract, setNewContract] = useState<EmployeeContract>({
    id: 0,
    start_date: "",
    end_date: "",
    position: "",
    employee_id: 0,
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    // await createEmployeeContract(newContract).unwrap();    
    e.preventDefault();
    setSuccessMessage("Create employee contract successfully!");
    setTimeout(() => {
      setSuccessMessage(null);
      navigate("/employee-contracts");
    }, 3000);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Create Employee Contract</h1>
      {successMessage && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 border border-green-300 rounded">
          {successMessage}
        </div>
      )}
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
            value={newContract.position}
            onChange={(e) =>
              setNewContract({ ...newContract, position: e.target.value })
            }
            required
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
            value={newContract.start_date}
            onChange={(e) =>
              setNewContract({ ...newContract, start_date: e.target.value })
            }
            required
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
            value={newContract.end_date}
            onChange={(e) =>
              setNewContract({ ...newContract, end_date: e.target.value })
            }
            required
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
            value={newContract.employee_id}
            onChange={(e) =>
              setNewContract({
                ...newContract,
                employee_id: Number(e.target.value),
              })
            }
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit">Create Contract</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEmployeeContract;
