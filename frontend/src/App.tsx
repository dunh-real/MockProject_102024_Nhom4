import React from "react";
import { RouterProvider } from "react-router-dom";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import router from "./router";

const App: React.FC = () => {
    return (
        <TooltipProvider>
            <RouterProvider router={router}></RouterProvider>
        </TooltipProvider>
    );
};

export default App;