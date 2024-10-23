// components/EmployeeContractManagement.tsx
import React, { useEffect, useState } from "react";

import { EmployeeContract } from "../../types/employee-contracts";
import { LoadingLottie } from "../../components"; // Adjust the import as necessary
import { employeeContractApi } from "../../store/api/endpoints/employeeContractApi";

const EmployeeContractManagement: React.FC = () => {
  const [contracts, setContracts] = useState<EmployeeContract[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newContract, setNewContract] = useState<EmployeeContract>({
    id: 0,
    start_date: "",
    end_date: "",
    position: "",
    employee_id: 0,
  });

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const data = await employeeContractApi.getAll();
        setContracts(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch contracts.");
        setLoading(false);
      }
    };
    fetchContracts();
  }, []);

  const handleCreate = async () => {
    try {
      const createdContract = await employeeContractApi.create(newContract);
      setContracts([...contracts, createdContract]);
      setNewContract({
        id: 0,
        start_date: "",
        end_date: "",
        position: "",
        employee_id: 0,
      }); // Reset form
    } catch (error) {
      setError("Failed to create contract.");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await employeeContractApi.delete(id);
      setContracts(contracts.filter((contract) => contract.id !== id));
    } catch (error) {
      setError("Failed to delete contract.");
    }
  };

  if (loading) {
    return (
      <div className=" flex justify-center pt-10">
        <div className=" w-[250px] ">
          <LoadingLottie />
        </div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Employee Contracts</h1>
      <div>
        <h2 className="text-lg font-semibold">Add New Contract</h2>
        <input
          type="text"
          placeholder="Position"
          value={newContract.position}
          onChange={(e) =>
            setNewContract({ ...newContract, position: e.target.value })
          }
        />
        <input
          type="date"
          value={newContract.start_date}
          onChange={(e) =>
            setNewContract({ ...newContract, start_date: e.target.value })
          }
        />
        <input
          type="date"
          value={newContract.end_date}
          onChange={(e) =>
            setNewContract({ ...newContract, end_date: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Employee ID"
          value={newContract.employee_id}
          onChange={(e) =>
            setNewContract({
              ...newContract,
              employee_id: Number(e.target.value),
            })
          }
        />
        <button onClick={handleCreate}>Create Contract</button>
      </div>
      <ul>
        {contracts.map((contract) => (
          <li key={contract.id}>
            {contract.position} (From: {contract.start_date} To:{" "}
            {contract.end_date})
            <button onClick={() => handleDelete(contract.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeContractManagement;
