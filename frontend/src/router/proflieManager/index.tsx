import { ErrorBoundary } from '../../components';
import { MainLayout } from '../../layouts';
import React from 'react'
import { RouteObject } from 'react-router-dom';
import ProfileManagerPage from '../../pages/profileManager';

const ProfileManagerRouter:RouteObject[] = [
  {
    path: "/profilemanager",
        element: <MainLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "",
                element: <ProfileManagerPage />,
            },
        ],
  }
]

export default ProfileManagerRouter;