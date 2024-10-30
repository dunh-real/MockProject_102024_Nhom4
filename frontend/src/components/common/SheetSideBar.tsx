import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardContent } from "../ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { LetterI, ChevronUp, ChevronDown } from "tabler-icons-react";
import { getMenusByRole } from "../../services/data/menus"; // Import the menu function
import { useLocation, useNavigate } from "react-router";
import { MenuItemType } from "../../types";
import { PiBuildingApartment } from "react-icons/pi"; // Import the house icon

const SheetSideBar: React.FC = () => {
    const role = useSelector((state: any) => state.auth.role); // Get role from state
    const menus = getMenusByRole(role); // Get menus based on role
    console.log("Menus for Role:", role, menus); // Log the menus
    const [menuState, setMenuState] = useState<MenuItemType[]>(menus); // State for menus
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleOpenDropDownSideBar = (index: number) => {
        const updatedMenus = [...menuState];
        updatedMenus[index].isOpen = !updatedMenus[index].isOpen;
        setMenuState(updatedMenus);
    };

    const handleNavigate = (menu: MenuItemType) => {
        navigate(`${menu.link}`);
    };

    // Disable Pointer Events None
    useEffect(() => {
        const checkAndRemovePointerEvents = () => {
            const bodyElement = document.body;
            const bodyStyles = window.getComputedStyle(bodyElement);
            const currentPointerEvents = bodyStyles.pointerEvents;

            if (currentPointerEvents === "none") {
                bodyElement.style.pointerEvents = "";
            }
        };

        checkAndRemovePointerEvents();
        const intervalId = setInterval(checkAndRemovePointerEvents, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Card className="w-60 fixed top-0 start-0 rounded-none overflow-y-auto bg-[#F8A869]">
            <CardContent className="shadow-none m-0 p-0 focus-visible:outline-none">
                <div className="w-full h-screen overflow-y-auto rounded-none shadow-none border-e dark:border-foreground">
                    <div className="flex flex-col text-white">
                        {/* Retaining the MOCK CARE header */}
                        <div className="flex items-center gap-2 p-4">
                            <PiBuildingApartment size={18} />
                            <span className="text-2xl font-medium">MOCK CARE</span>
                        </div>
                        {menuState?.map((menu, index) => (
                            <React.Fragment key={index}>
                                {menu.children ? (
                                    <Collapsible className="flex flex-col items-start">
                                        <CollapsibleTrigger
                                            className="nav-link hover:nav-active w-full flex justify-between items-center focus-visible:outline-none"
                                            onClick={() => handleOpenDropDownSideBar(index)}
                                        >
                                            <div className="flex gap-2 items-center">
                                                {menu.icon && menu.icon}
                                                {menu.title}
                                            </div>

                                            {menu.isOpen ? (
                                                <ChevronUp size={18} strokeWidth={2} />
                                            ) : (
                                                <ChevronDown size={18} strokeWidth={2} />
                                            )}
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="collapsibleDropdown" asChild>
                                            <ul className="w-full ps-2">
                                                {menu.children.map((child, childIndex) => (
                                                    <li
                                                        key={childIndex}
                                                        className="nav-link py-2 hover:nav-active"
                                                        onClick={() => handleNavigate(child)}
                                                    >
                                                        <LetterI size={18} strokeWidth={2} />
                                                        {child.icon && child.icon}
                                                        {child.title}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CollapsibleContent>
                                    </Collapsible>
                                ) : (
                                    <div
                                        className={
                                            "nav-link hover:nav-active " +
                                            (pathname === menu.link && "nav-active")
                                        }
                                        onClick={() => handleNavigate(menu)}
                                    >
                                        {menu.icon && menu.icon}
                                        {menu.title}
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SheetSideBar;
