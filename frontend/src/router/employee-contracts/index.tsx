import EmployeeContracts from "../../pages/employee-contracts";
import { ErrorBoundary } from "../../components";
import { MainLayout } from "../../layouts";
import { RouteObject } from "react-router-dom";
import CreateEmployeeContract from "../../pages/employee-contracts/create";
import EmployeeContractDetails from "../../pages/employee-contracts/detail";


const EmployeeContractRoutes: RouteObject[] = [
    {
        path: "/employee-contracts",
        element: <MainLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "",
                element: <EmployeeContracts />,
            },
            {
                path: "create",
                element: <CreateEmployeeContract />,
            },
            {
                path:"details/:id",
                element: <EmployeeContractDetails />,
            },
        ],
    },
];

export default EmployeeContractRoutes;