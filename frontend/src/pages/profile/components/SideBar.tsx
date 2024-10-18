import React from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
interface SidebarProps {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className="md:w-1/4 w-full bg-orange-200 rounded-lg p-4 mb-4 md:mb-0">
            <div className="flex flex-col mt-[25px] items-center">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-6">
                    <img
                        src="https://github.com/shadcn.png"
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col mt-4 gap-5 w-full">
                    <button
                        className={`bg-white text-left text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 w-full 
                            ${activeTab === "Personal Information" ? "bg-gray-100 text-[#f99b53]" : ""}`}
                        onClick={() => setActiveTab("Personal Information")}
                    >
                        <div className="flex pl-[15px] items-center gap-3">
                            <CiUser className="text-[19px] font-bold" />
                            <p>Personal Information</p>
                        </div>
                    </button>
                    <button
                        className={`bg-white text-left text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 w-full 
                            ${activeTab === "Security" ? "bg-gray-100 text-[#f99b53]" : ""}`}
                        onClick={() => setActiveTab("Security")}
                    >
                        <div className="flex pl-[15px] items-center gap-3">
                            <MdOutlineSecurity className="text-[19px] font-bold" />
                            <p>Security</p>
                        </div>
                    </button>
                    <button
                        className={`bg-white text-left text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 w-full
                            ${activeTab === "Work & Position" ? "bg-gray-100 text-[#f99b53]" : ""}`}
                        onClick={() => setActiveTab("Work & Position")}
                    >
                        <div className="flex pl-[15px]  items-center gap-3">
                            <BsPersonWorkspace className="text-[19px] font-bold" />
                            <p>Work & Position</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
