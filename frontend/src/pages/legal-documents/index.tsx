import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { setBreadCrumb } from "../../store/slice/app";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { File, Search } from "tabler-icons-react";
import { Button } from "../../components/ui/button";

interface Document {
  name: string;
  id: string;
  content: string;
}
const documents = [
  {
    name: "Employment Contract",
    id: "employment",
    content:
      "This is a sample employment contract. It outlines the terms and conditions of employment between the employer and the employee.This is a sample employment contract. It outlines the terms and conditions of employment between the employer and the employee.This is a sample employment contract. It outlines the terms and conditions of employment between the employer and the employee.This is a sample employment contract. It outlines the terms and conditions of employment between the employer and the employee.This is a sample employment contract. It outlines the terms and conditions of employment between the employer and the employee.This is a sample employment contract. It outlines the terms and conditions of employment between the employer and the employee.",
  },
  {
    name: "Confidentiality Agreements",
    id: "confidentiality",
    content:
      "This confidentiality agreement is designed to protect proprietary information and trade secrets of the company.",
  },
  {
    name: "Employee Handbook",
    id: "handbook",
    content:
      "The employee handbook contains important information about company policies, procedures, and employee expectations.",
  },
  {
    name: "Confidentiality Agreements",
    id: "confidentiality",
    content:
      "This confidentiality agreement is designed to protect proprietary information and trade secrets of the company.",
  },
  {
    name: "Employee Handbook",
    id: "handbook",
    content:
      "The employee handbook contains important information about company policies, procedures, and employee expectations.",
  },
  {
    name: "Employment Contract",
    id: "employment",
    content:
      "This is a sample employment contract. It outlines the terms and conditions of employment between the employer and the employee.This is a sample employment contract. It outlines the terms and conditions of employment between the employer and the employee.This is a sample employment contract. It outlines the terms and conditions of employment between the employer and the employee.This is a sample employment contract. It outlines the terms and conditions of employment between the employer and the employee.This is a sample employment contract. It outlines the terms and conditions of employment between the employer and the employee.This is a sample employment contract. It outlines the terms and conditions of employment between the employer and the employee.",
  },
  {
    name: "Confidentiality Agreements",
    id: "confidentiality",
    content:
      "This confidentiality agreement is designed to protect proprietary information and trade secrets of the company.",
  },
  {
    name: "Employee Handbook",
    id: "handbook",
    content:
      "The employee handbook contains important information about company policies, procedures, and employee expectations.",
  },
  {
    name: "Confidentiality Agreements",
    id: "confidentiality",
    content:
      "This confidentiality agreement is designed to protect proprietary information and trade secrets of the company.",
  },
  {
    name: "Employee Handbook",
    id: "handbook",
    content:
      "The employee handbook contains important information about company policies, procedures, and employee expectations.",
  },
  {
    name: "Liability Waivers",
    id: "liability",
    content:
      "This liability waiver releases the company from responsibility for certain risks or injuries.",
  },
  {
    name: "Service Level Agreements",
    id: "sla",
    content:
      "The Service Level Agreement (SLA) defines the level of service expected from the service provider to the customer.",
  },
  { name: "...", id: "other1", content: "Additional document content here." },
  { name: "...", id: "other2", content: "Additional document content here." },
  { name: "...", id: "other3", content: "Additional document content here." },
];

const LegalDocuments: React.FC = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  );

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openDocument = (doc: Document) => {
    setSelectedDocument(doc);
  };

  const closeDocument = () => {
    setSelectedDocument(null);
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => openDocument(doc)}
              >
                <File className="w-16 h-16 text-gray-600 mb-2" />
                <p className="text-sm text-center">{doc.name}</p>
              </div>
            ))}
          </div>
          <Dialog open={selectedDocument !== null} onOpenChange={closeDocument}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{selectedDocument?.name}</DialogTitle>
              </DialogHeader>
              <DialogDescription style={{ whiteSpace: 'pre-line', lineHeight: '1.6', margin: '16px 0' }}>{selectedDocument?.content}</DialogDescription>
              <Button onClick={closeDocument}>Close</Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default LegalDocuments;
