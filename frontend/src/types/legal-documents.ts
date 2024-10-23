export interface LeaseContractType {
  ID: number;
  start_date: string; // Format YYYY-MM-DD
  end_date: string; // Format YYYY-MM-DD
  rent_price: number; // Decimal value
  status: string; // Status of the lease contract
  apartment_id: number;
  resident_id: number;
  employee_id: number;
}
