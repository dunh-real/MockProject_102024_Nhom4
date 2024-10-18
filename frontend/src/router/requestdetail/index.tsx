import RequestDetail from "../../pages/requestdetail";
import { ErrorBoundary } from "../../components";
import { MainLayout } from "../../layouts";
import Request from "../../pages/Request";
import { RouteObject } from 'react-router-dom'

const RequestDetailRouter:RouteObject[] = [
    {
        path: "/request-detail/:id",
        element: <MainLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "",
                element: <RequestDetail />,
            },
        ],
    },
]


export default RequestDetailRouter

