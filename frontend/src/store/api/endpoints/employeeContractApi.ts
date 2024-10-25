import { EmployeeContract } from "@/types/employee-contracts";
import { api } from ".."; // Assuming you have a base API setup similar to the previous example

const employeeContractApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Create an employee contract
    createEmployeeContract: builder.mutation({
      query: (contract: EmployeeContract) => ({
        url: "/api/employeeContracts/create", // Adjusted for create
        method: "POST",
        body: contract,
      }),
    }),


    // Update an employee contract by ID
    updateEmployeeContract: builder.mutation({
      query: ({
        id,
        contract,
      }: {
        id: number;
        contract: EmployeeContract;
      }) => ({
        url: `/api/employeeContracts/update/${id}`, // Adjusted for update
        method: "PUT",
        body: contract,
      }),
    }),

    // Delete an employee contract by ID
    deleteEmployeeContract: builder.mutation({
      query: (id: number) => ({
        url: `/api/employeeContracts/delete/${id}`, // Adjusted for delete
        method: "DELETE",
      }),
    }),

    // Get all employee contracts
    getAllEmployeeContracts: builder.query({
      query: () => ({
        url: "/api/employeeContracts", // Adjusted for get all
        method: "GET",
      }),
    }),
    getEmployeeContractById: builder.query({
      query: (id) => ({
        url: `/api/employeeContracts/${id}`, // Adjusted for get all
        method: "GET",
      }),
    }),
  }),
});

// Exporting hooks for use in React components
export const {
  useCreateEmployeeContractMutation,
  useUpdateEmployeeContractMutation,
  useDeleteEmployeeContractMutation,
  useGetAllEmployeeContractsQuery,
  useGetEmployeeContractByIdQuery,
} = employeeContractApi;
