import LegalDocuments from "../../pages/legal-documents";
import { ErrorBoundary } from "../../components";
import { MainLayout } from "../../layouts";
import { RouteObject } from "react-router-dom";

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
        ],
    },
];

export default LegalDocumentsRoutes;
