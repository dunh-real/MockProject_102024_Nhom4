import { LeaseContractType } from "@/types/legal-documents";
import { api } from "..";

const contractApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createLeaseContract: builder.mutation({
      query: (contract: LeaseContractType) => ({
        url: "/api/staff/lease-contracts",
        method: "POST",
        body: contract,
      }),
    }),
  }),
});

export const { useCreateLeaseContractMutation } = contractApi;
