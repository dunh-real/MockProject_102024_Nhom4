import React from "react";
import { BuildingSkyscraper } from 'tabler-icons-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

const LandingHeader: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="sticky top-0 w-full h-20 py-3 lg:px-6 px-3 flex justify-between items-center bg-[#F8A869]">
            <div className="flex items-center cursor-pointer" onClick={() => window.location.reload()}>
                <BuildingSkyscraper className="w-8 h-8 text-light" />
                <p className="ml-2 text-light text-2xl">MOCK CARE</p>
            </div>
            <div className="lg:hidden flex item-center">
                <DropdownMenu>
                    <DropdownMenuTrigger className="text-white text-lg md:text-xl">
                        <CiMenuBurger />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => scrollToSection("home-section-mobile")}>
                            Home
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => scrollToSection("about-us-section")}>
                            About Us
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => scrollToSection("contact-us")}>
                            Contact
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Policy
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Sign In
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="hidden lg:flex justify-end items-center gap-4 text-white">
                <p onClick={() => scrollToSection("home-section")} className="cursor-pointer text-md md:text-lg">Home</p>
                <p onClick={() => scrollToSection("about-us-section")} className="cursor-pointer text-md md:text-lg">About Us</p>
                <p onClick={() => scrollToSection("contact-us")} className="cursor-pointer text-md md:text-lg">Contact</p>
                <p className="text-md md:text-lg">Policy</p>
                <Link to="/auth/sign-in" className="cursor-pointer text-md md:text-lg">
                    Sign In
                </Link>
            </div>
        </div>
    );
}

export default LandingHeader;
