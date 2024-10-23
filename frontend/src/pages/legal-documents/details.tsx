"use client";

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const LeaseContractDetails: React.FC = ( id ) =>{
  const [contract, setContract] = useState<LeaseContractType | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    fetchContract();
  }, [id]);

  const fetchContract = async () => {
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
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contract) return;
    try {
      const response = await fetch(`/api/staff/lease-contracts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contract),
      });
      if (!response.ok) throw new Error("Failed to update contract");
      setFeedback({
        type: "success",
        message: "Lease contract updated successfully.",
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating contract:", error);
      setFeedback({
        type: "error",
        message: "Failed to update lease contract.",
      });
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/staff/lease-contracts/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete contract");
      setFeedback({
        type: "success",
        message: "Lease contract deleted successfully.",
      });
    } catch (error) {
      console.error("Error deleting contract:", error);
      setFeedback({
        type: "error",
        message: "Failed to delete lease contract.",
      });
    }
  };

  if (!contract) return <div>Loading...</div>;

  return (
    <>
      {feedback && (
        <div
          className={`mb-4 p-4 rounded-md ${
            feedback.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          <div className="flex items-center">
            {feedback.type === "success" ? (
              <CheckCircle2 className="h-5 w-5 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2" />
            )}
            <span className="font-semibold">
              {feedback.type === "success" ? "Success" : "Error"}
            </span>
          </div>
          <p className="mt-1">{feedback.message}</p>
        </div>
      )}
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Lease Contract Details</CardTitle>
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
              <Dialog open={isDeleting} onOpenChange={setIsDeleting}>
                <DialogTrigger asChild>
                  <Button variant="destructive">Delete</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      Are you sure you want to delete this lease contract?
                    </DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      the lease contract.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setIsDeleting(false)}
                    >
                      Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleDelete}>
                      Delete
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </>
          )}
        </CardFooter>
      </Card>
    </>
  );
}
export default LeaseContractDetails;