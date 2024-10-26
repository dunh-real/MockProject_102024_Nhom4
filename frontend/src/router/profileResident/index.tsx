import { ErrorBoundary } from '../../components';
import { MainLayout } from '../../layouts';
import React from 'react'
import { RouteObject } from 'react-router-dom';
import ProfileResidentPage from '../../pages/profileResident';

const ProfileResidentRouter:RouteObject[] = [
  {
    path: "/profileresident",
        element: <MainLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "",
                element: <ProfileResidentPage />,
            },
        ],
  }
]

export default ProfileResidentRouter;