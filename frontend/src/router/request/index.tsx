import { ErrorBoundary } from "../../components";
import { MainLayout } from "../../layouts";
import Request from "../../pages/Request";
import { RouteObject } from 'react-router-dom'

const RequestRouter:RouteObject[] = [
    {
        path: "/request",
        element: <MainLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "",
                element: <Request />,
            },
        ],
    },
]


export default RequestRouter

