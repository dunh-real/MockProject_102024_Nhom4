import React from "react";
import { Card } from "../../components/ui/card";
import menusList from "../../services/data/menus";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { PiBuildingApartment } from "react-icons/pi"; // Import the house icon

const IconSidebar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Card className="hidden z-[2000] w-14 h-screen fixed top-0 start-0 lg:flex border-e-2 dark:border-foreground justify-center overflow-y-auto rounded-none bg-[#F8A869]">
      <div className="flex flex-col items-center text-white">
        <div className="flex items-center gap-2 p-4">
          <PiBuildingApartment size={18} />
        </div>
        {menusList?.map((menu: any, index) => (
          <React.Fragment key={index}>
            {menu.children ? (
              <Tooltip delayDuration={100}>
                <TooltipTrigger>
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger
                      asChild
                      className=" focus-visible:outline-none "
                    >
                      <div
                        className={
                          "nav-link hover:nav-active w-full " +
                          (pathname === menu.link && "nav-active")
                        }
                      >
                        {menu.icon && menu.icon}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="right"
                      className="w-[200px] z-[2500] "
                    >
                      <DropdownMenuLabel>{menu.title}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        {menu?.children.map((child: any) => (
                          <Link to={child.link} key={child.link}>
                            <DropdownMenuItem className=" cursor-pointer z-[3000] ">
                              {child.title}
                            </DropdownMenuItem>
                          </Link>
                        ))}
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TooltipTrigger>
                <TooltipContent className=" sticky z-50 " side="right">
                  {menu.title}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Link
                    className={
                      "nav-link hover:nav-active " +
                      (pathname === menu.link && "nav-active")
                    }
                    to={menu.link}
                  >
                    {menu.icon && menu.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent className=" sticky z-50 " side="right">
                  {menu.title}
                </TooltipContent>
              </Tooltip>
            )}
          </React.Fragment>
        ))}
      </div>
    </Card>
  );
};

export default IconSidebar;
