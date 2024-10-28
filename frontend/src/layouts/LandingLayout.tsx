import React from "react";
import { Outlet } from "react-router-dom";
import LandingHeader from "../components/common/LandingHeader";

const LandingLayout: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <LandingHeader />
            <main className="flex-grow overflow-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default LandingLayout;