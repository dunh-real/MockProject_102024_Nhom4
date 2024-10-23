import axios from 'axios';
import { EmployeeContract } from '@/types/employee-contracts';

const API_URL = 'http://your-api-endpoint.com/api/employeeContracts';

export const employeeContractApi = {
    getAll: async (): Promise<EmployeeContract[]> => {
        const response = await axios.get(API_URL);
        return response.data;
    },
    create: async (contract: EmployeeContract): Promise<EmployeeContract> => {
        const response = await axios.post(API_URL, contract);
        return response.data;
    },
    update: async (id: number, contract: EmployeeContract): Promise<EmployeeContract> => {
        const response = await axios.put(`${API_URL}/${id}`, contract);
        return response.data;
    },
    delete: async (id: number): Promise<void> => {
        await axios.delete(`${API_URL}/${id}`);
    },
};
