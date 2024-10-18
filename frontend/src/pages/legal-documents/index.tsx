import { Input } from "../../components/ui/input";
import { setBreadCrumb } from "../../store/slice/app";
import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { ChevronLeft, ChevronRight, File, Search } from "tabler-icons-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";


const leaseContracts = [
  {
    start_date: "2024-01-31",
    end_date: "2025-06-16",
    rent_price: 2452.05,
    status: "active",
    apartment_id: 54,
    resident_id: 206,
    employee_id: 98,
  },
  {
    start_date: "2022-11-07",
    end_date: "2025-02-22",
    rent_price: 1881.76,
    status: "expired",
    apartment_id: 51,
    resident_id: 65,
    employee_id: 80,
  },
  {
    start_date: "2024-03-16",
    end_date: "2025-06-27",
    rent_price: 2211.82,
    status: "terminated",
    apartment_id: 8,
    resident_id: 702,
    employee_id: 8,
  },
  {
    start_date: "2023-10-18",
    end_date: "2026-06-05",
    rent_price: 1664.99,
    status: "expired",
    apartment_id: 16,
    resident_id: 788,
    employee_id: 64,
  },
  {
    start_date: "2023-07-29",
    end_date: "2026-01-24",
    rent_price: 862.3,
    status: "active",
    apartment_id: 71,
    resident_id: 117,
    employee_id: 34,
  },
  {
    start_date: "2024-04-10",
    end_date: "2025-01-25",
    rent_price: 2480.1,
    status: "expired",
    apartment_id: 7,
    resident_id: 238,
    employee_id: 87,
  },
  {
    start_date: "2023-09-25",
    end_date: "2025-12-29",
    rent_price: 901.85,
    status: "terminated",
    apartment_id: 70,
    resident_id: 813,
    employee_id: 11,
  },
  {
    start_date: "2023-01-15",
    end_date: "2026-03-27",
    rent_price: 2066.21,
    status: "pending",
    apartment_id: 42,
    resident_id: 959,
    employee_id: 3,
  },
  {
    start_date: "2022-12-17",
    end_date: "2026-08-14",
    rent_price: 2066.31,
    status: "terminated",
    apartment_id: 79,
    resident_id: 86,
    employee_id: 24,
  },
  {
    start_date: "2024-05-18",
    end_date: "2025-12-02",
    rent_price: 2138.24,
    status: "active",
    apartment_id: 43,
    resident_id: 888,
    employee_id: 85,
  },
  {
    start_date: "2022-11-18",
    end_date: "2025-08-14",
    rent_price: 1363.09,
    status: "terminated",
    apartment_id: 61,
    resident_id: 58,
    employee_id: 22,
  },
  {
    start_date: "2023-11-14",
    end_date: "2025-08-02",
    rent_price: 2496.01,
    status: "terminated",
    apartment_id: 21,
    resident_id: 805,
    employee_id: 13,
  },
  {
    start_date: "2024-03-20",
    end_date: "2025-03-18",
    rent_price: 1872.68,
    status: "terminated",
    apartment_id: 91,
    resident_id: 467,
    employee_id: 85,
  },
  {
    start_date: "2023-11-26",
    end_date: "2026-06-11",
    rent_price: 2016.22,
    status: "active",
    apartment_id: 13,
    resident_id: 8,
    employee_id: 100,
  },
  {
    start_date: "2023-06-15",
    end_date: "2026-06-17",
    rent_price: 1012.77,
    status: "pending",
    apartment_id: 93,
    resident_id: 549,
    employee_id: 47,
  },
];

const ITEMS_PER_PAGE = 10;

const LegalDocuments: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredDocuments = useMemo(() => {
    return leaseContracts.filter((doc) =>
      doc.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredDocuments.length / ITEMS_PER_PAGE);

  const paginatedDocuments = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredDocuments.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredDocuments, currentPage]);

  const handleCreateClick = () => {
    navigate("/legal-documents/create"); // Replace with the route of the create page
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  dispatch(
    setBreadCrumb([
      {
        title: "Dashboard",
        link: "/dashboard",
      },
      {
        title: "Legal documents",
        link: "/legal-documents",
      },
    ])
  );

  return (
    <div>
      <div>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Click any document to view them!
          </h1>
          <div className="mb-6 relative">
            <Input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className=" flex justify-center items-center mb-4 md:justify-end">
            <Button onClick={handleCreateClick}>Create New Document</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {paginatedDocuments.map((doc) => (
              <div
                key={`${doc.apartment_id}-${doc.employee_id}-${doc.resident_id}`}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <File className="w-16 h-16 text-gray-600 mb-2" />
                <p className="text-sm text-center">Lease Contract {doc.apartment_id}, {doc.employee_id}, {doc.resident_id}</p>
                <p className="text-sm text-center text-[#F8A869]">{doc.start_date} to {doc.end_date}</p>
                
              </div>
            ))}
          </div>
          <div>
            <div className="mt-8 flex justify-center items-center space-x-2">
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                variant="outline"
                size="sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                variant="outline"
                size="sm"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalDocuments;
