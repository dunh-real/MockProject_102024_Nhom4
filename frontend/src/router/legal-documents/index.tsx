import LegalDocuments from "../../pages/legal-documents";
import { ErrorBoundary } from "../../components";
import { MainLayout } from "../../layouts";
import { RouteObject } from "react-router-dom";
import CreateLeaseContract from "../../pages/legal-documents/create";
import LeaseContractDetails from "../../pages/legal-documents/details";


const LegalDocumentsRoutes: RouteObject[] = [
  {
    path: "/legal-documents",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <LegalDocuments />,
      },
      {
        path: "create",
        element: <CreateLeaseContract />,
      },
      {
        path: "details/:id",
        element: <LeaseContractDetails />,
      },
    ],
  },
];

export default LegalDocumentsRoutes;
