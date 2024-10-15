import React from "react";
import SheetSideBar from "../common/SheetSideBar"
import IconSideBar from "../common/IconSideBar"
import { useSelector } from "react-redux";

const SideBar: React.FC = () => {
    const isSideBarOpen = useSelector((state: any) => state.app.isSideBarOpen);

    return (
        <>
            {!isSideBarOpen ? (
                <IconSideBar />
            ) : (
                <SheetSideBar />
            )}
        </>
    );
};

export default SideBar;