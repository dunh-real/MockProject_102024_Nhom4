import Create from "../../pages/Request/components/tabs/create";
import { ErrorBoundary } from "../../components";
import { MainLayout } from "../../layouts";
import Request from "../../pages/Request";
import { RouteObject } from 'react-router-dom'

const CreateRouter:RouteObject[] = [
    {
        path: "/create",
        element: <MainLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "",
                element: <Create />,
            },
        ],
    },
]


export default CreateRouter

