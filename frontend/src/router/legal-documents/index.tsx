import LegalDocuments from "../../pages/legal-documents";
import { ErrorBoundary } from "../../components";
import { MainLayout } from "../../layouts";
import { RouteObject } from "react-router-dom";
import CreateLeaseContract from "../../pages/legal-documents/create";


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
                path: "create", // This will match "/legal-documents/create"
                element: <CreateLeaseContract />, // Component trang create
              },
        ],
    },
];

export default LegalDocumentsRoutes;
