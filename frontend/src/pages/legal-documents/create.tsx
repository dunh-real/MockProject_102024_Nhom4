import React, { FormEvent, useState } from "react";
import { LeaseContractType } from "@/types/legal-documents";
import { useCreateLeaseContractMutation } from "../../store/api/endpoints/legal-documents";
import { Button } from "../../components/ui/button";

const CreateLeaseContract: React.FC = () => {
  const [formData, setFormData] = useState<LeaseContractType>({
    start_date: "",
    end_date: "",
    rent_price: 0,
    status: "",
    apartment_id: 0,
    resident_id: 0,
    employee_id: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/staff/lease-contracts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          rent_price: formData.rent_price,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create lease contract");
      }

      setMessage("New lease contract created successfully");
      setFormData({
        start_date: "",
        end_date: "",
        rent_price: 0,
        status: "",
        apartment_id: 0,
        resident_id: 0,
        employee_id: 0,
      });
    } catch (error) {
      setMessage("Failed to create lease contract. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 bg-white shadow rounded-lg">
      <h2 className="flex justify-center text-3xl font-bold mb-6 text-[#F8A869]">Create New Lease Contract</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
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
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="rent_price"
            className="block text-sm font-medium text-gray-700"
          >
            Rent Price
          </label>
          <input
            type="number"
            id="rent_price"
            name="rent_price"
            value={formData.rent_price}
            onChange={handleChange}
            required
            step="0.01"
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="terminated">Terminated</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="apartment_id"
            className="block text-sm font-medium text-gray-700"
          >
            Apartment ID
          </label>
          <input
            type="text"
            id="apartment_id"
            name="apartment_id"
            value={formData.apartment_id}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="resident_id"
            className="block text-sm font-medium text-gray-700"
          >
            Resident ID
          </label>
          <input
            type="text"
            id="resident_id"
            name="resident_id"
            value={formData.resident_id}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
            type="text"
            id="employee_id"
            name="employee_id"
            value={formData.employee_id}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4"
          >
            {isSubmitting ? "Creating..." : "Create Lease Contract"}
          </Button>
        </div>
      </form>
      {message && (
        <div
          className={`mt-4 p-2 rounded ${
            message.includes("Failed")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default CreateLeaseContract;
