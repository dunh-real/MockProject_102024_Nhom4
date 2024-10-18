import ProfilePage from '../../pages/profile';
import { ErrorBoundary } from '../../components';
import { MainLayout } from '../../layouts';
import React from 'react'
import { RouteObject } from 'react-router-dom';
import ContractInformation from '../../pages/ContractInformation';

const ContractInformationRouter:RouteObject[] = [
  {
    path: "/contractinformation",
        element: <MainLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "",
                element: <ContractInformation />,
            },
        ],
  }
]

export default ContractInformationRouter;