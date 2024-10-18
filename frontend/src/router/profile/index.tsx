import ProfilePage from '../../pages/profile';
import { ErrorBoundary } from '../../components';
import { MainLayout } from '../../layouts';
import React from 'react'
import { RouteObject } from 'react-router-dom';

const ProfileRouter:RouteObject[] = [
  {
    path: "/profile",
        element: <MainLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "",
                element: <ProfilePage />,
            },
        ],
  }
]

export default ProfileRouter;