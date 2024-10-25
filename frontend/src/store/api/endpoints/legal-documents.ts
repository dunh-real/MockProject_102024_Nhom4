import { LeaseContractType } from "@/types/legal-documents";
import { api } from "..";

const contractApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllLeaseContracts: builder.query({
      query: () => ({
        url: "/api/staff/lease-contracts", // Get all URL
        method: "GET",
      }),
    }),
    createLeaseContract: builder.mutation({
      query: (contract: LeaseContractType) => ({
        url: "/api/staff/lease-contracts/create", // Create URL
        method: "POST",
        body: contract,
      }),
    }),
    updateLeaseContract: builder.mutation({
      query: ({ id, contract }: { id: string; contract: LeaseContractType }) => ({
        url: `/api/staff/lease-contracts/update/${id}`, // Update URL
        method: "PUT",
        body: contract,
      }),
    }),
    deleteLeaseContract: builder.mutation({
      query: (id: string) => ({
        url: `/api/staff/lease-contracts/delete/${id}`, // Delete URL
        method: "DELETE",
      }),
    }),
  }),
});

export const { useCreateLeaseContractMutation } = contractApi;
