import { useState, useEffect } from "react";
import { LeaseContractType } from "../../types/legal-documents";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  useUpdateLeaseContractMutation,
  useDeleteLeaseContractMutation,
} from "../../store/api/endpoints/legal-documents";
import { useNavigate } from "react-router-dom";

const LeaseContractDetails: React.FC = (id) => {
  const [contract, setContract] = useState<LeaseContractType | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); 
  const [updateLeaseContract] = useUpdateLeaseContractMutation();
  const [deleteLeaseContract] = useDeleteLeaseContractMutation();
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchContract();
  }, [id]);

  const fetchContract = async () => {
    // Fake data for testing purposes
    const fakeContract: LeaseContractType = {
      ID: 123, // Use the id passed as prop
      start_date: "2024-01-01",
      end_date: "2025-01-01",
      rent_price: 1200.0,
      status: "Active",
      apartment_id: 101,
      resident_id: 201,
      employee_id: 301,
    };

    // Uncomment the following lines to fetch from API instead of using fake data
    /*
    try {
      const response = await fetch(`/api/staff/lease-contracts/${id}`);
      if (!response.ok) throw new Error("Failed to fetch contract");
      const data = await response.json();
      setContract(data);
    } catch (error) {
      console.error("Error fetching contract:", error);
      setFeedback({
        type: "error",
        message: "Failed to fetch lease contract details.",
      });
    }
    */

    // Set the fake contract
    setContract(fakeContract);
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contract) return;
    setSuccessMessage("Lease contract updated successfully!");
    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage(null);
      // navigate("/legal-documents");
    }, 3000);
    try {
      // await updateLeaseContract({ id: contract.ID, contract }).unwrap();
      setIsEditing(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unknown error occurred');
      }
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this contract?"
    );
    if (confirmed) {
      setSuccessMessage("Lease contract updated successfully!");
      setErrorMessage("");
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/legal-documents");
      }, 3000);
      // try {
      //   if (contract && contract.ID) {
      //     console.log("Deleting contract with ID:", contract.ID);
      //     await deleteLeaseContract(contract.ID).unwrap();
      //     setSuccessMessage("Lease contract updated successfully!");
      //     setErrorMessage("");
      //   } else {
      //     // Handle case when contract is null
      //     setErrorMessage("Contract ID is not defined.");
      //     setSuccessMessage("");
      //   }
      // } catch (error: unknown) {
      //   if (error instanceof Error) {
      //     setErrorMessage(error.message);
      //   } else {
      //     setErrorMessage('An unknown error occurred');
      //   }
      // }
    }
  };

  if (!contract) return <div>Loading...</div>;

  return (
    <>
      {successMessage && (
        <div className="w-full max-w-2xl mx-auto m-4 p-2 bg-green-100 text-green-700 border border-green-300 rounded">
          {successMessage}
        </div>
      )}
      {errorMessage && ( // Add error message display
        <div className="w-full max-w-2xl mx-auto m-4 p-2 bg-red-100 text-red-700 border border-red-300 rounded">
          {errorMessage}
        </div>
      )}
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center justify-center">
            Lease Contract Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <form onSubmit={handleUpdate} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="start_date">Start Date</Label>
                <Input
                  id="start_date"
                  type="date"
                  value={contract.start_date}
                  onChange={(e) =>
                    setContract({ ...contract, start_date: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end_date">End Date</Label>
                <Input
                  id="end_date"
                  type="date"
                  value={contract.end_date}
                  onChange={(e) =>
                    setContract({ ...contract, end_date: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rent_price">Rent Price</Label>
                <Input
                  id="rent_price"
                  type="number"
                  step="0.01"
                  value={contract.rent_price}
                  onChange={(e) =>
                    setContract({
                      ...contract,
                      rent_price: Number(e.target.value),
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Input
                  id="status"
                  type="text"
                  value={contract.status}
                  onChange={(e) =>
                    setContract({ ...contract, status: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apartment_id">Apartment ID</Label>
                <Input
                  id="apartment_id"
                  type="number"
                  value={contract.apartment_id}
                  onChange={(e) =>
                    setContract({
                      ...contract,
                      apartment_id: Number(e.target.value),
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="resident_id">Resident ID</Label>
                <Input
                  id="resident_id"
                  type="number"
                  value={contract.resident_id}
                  onChange={(e) =>
                    setContract({
                      ...contract,
                      resident_id: Number(e.target.value),
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employee_id">Employee ID</Label>
                <Input
                  id="employee_id"
                  type="number"
                  value={contract.employee_id}
                  onChange={(e) =>
                    setContract({
                      ...contract,
                      employee_id: Number(e.target.value),
                    })
                  }
                />
              </div>
              <Button type="submit">Save Changes</Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <strong>ID:</strong> {contract.ID}
              </div>
              <div>
                <strong>Start Date:</strong> {contract.start_date}
              </div>
              <div>
                <strong>End Date:</strong> {contract.end_date}
              </div>
              <div>
                <strong>Rent Price:</strong> ${contract.rent_price.toFixed(2)}
              </div>
              <div>
                <strong>Status:</strong> {contract.status}
              </div>
              <div>
                <strong>Apartment ID:</strong> {contract.apartment_id}
              </div>
              <div>
                <strong>Resident ID:</strong> {contract.resident_id}
              </div>
              <div>
                <strong>Employee ID:</strong> {contract.employee_id}
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {!isEditing && (
            <>
              <Button onClick={() => setIsEditing(true)}>Edit</Button>
              <Button variant="destructive" onClick={handleDelete}>
                Delete
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default LeaseContractDetails;
