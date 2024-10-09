import React, { useState } from "react";

const DetailsApartment = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-[#F8A869] opacity-70 flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="lg:hidden opacity-[0.5] text-gray"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <h1 className="text-gray text-3xl font-bold lg:text-2xl font-bold ml-2">
            MOCK CARE
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden lg:block">User Name</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"
            alt="avatar"
            className="rounded-full w-10 h-10"
          />
        </div>
      </header>

      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside
          className={`fixed lg:static transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition-transform duration-300 bg-[#FAF0E8] w-64 h-full lg:h-auto flex-shrink-0 mt-1 z-40 lg:z-auto`}
        >
          <nav className="flex flex-col">
            <a
              href="#"
              className="p-2 pl-6 relative text-white bg-black text-white hover:text-white transition-all duration-300 border border-[#F8A869]"
            >
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-[#F8A869] rounded-full"></span>
              Apartments
            </a>
            <a
              href="#"
              className="p-2 pl-6 relative border-l-4 border-[#F8A869] hover:bg-black hover:text-white transition-all duration-300 border border-[#F8A869]"
            >
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-[#F8A869] rounded-full"></span>
              Works schedule
            </a>
            <a
              href="#"
              className="p-2 pl-6 relative border-l-4 border-[#F8A869] hover:bg-black hover:text-white transition-all duration-300 border border-[#F8A869]"
            >
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-[#F8A869] rounded-full"></span>
              Salary & Bonus
            </a>
            <a
              href="#"
              className="p-2 pl-6 relative border-l-4 border-[#F8A869] hover:bg-black hover:text-white transition-all duration-300 border border-[#F8A869]"
            >
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-[#F8A869] rounded-full"></span>
              Feedback & Request
            </a>
            <a
              href="#"
              className="p-2 pl-6 relative border-l-4 border-[#F8A869] hover:bg-black hover:text-white transition-all duration-300 border border-[#F8A869]"
            >
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-[#F8A869] rounded-full"></span>
              Legal documents
            </a>
            <a
              href="#"
              className="p-2 pl-6 relative border-l-4 border-[#F8A869] hover:bg-black hover:text-white transition-all duration-300 border border-[#F8A869]"
            >
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-[#F8A869] rounded-full"></span>
              Contract information
            </a>
            <a
              href="#"
              className="p-2 pl-6 relative border-l-4 border-[#F8A869] hover:bg-black hover:text-white transition-all duration-300 border border-[#F8A869]"
            >
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-[#F8A869] rounded-full"></span>
              Training
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Details Apartment</h2>
          <div className="border-b-8 border-[#F8A869] opacity-[0.5] w-full mb-6"></div>

          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
            <h2 className="text-2xl text-gray-700 font-bold text-center mb-8">
              DETAILS APARTMENT
            </h2>

            {/* Apartment ID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="apartmentId"
                >
                  Apartment ID
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  type="text"
                  id="apartmentId"
                  value="A305"
                  readOnly
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="buildingName"
                >
                  Building Name
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  type="text"
                  id="buildingName"
                  value="xxxxxxxxxxxx"
                  readOnly
                />
              </div>
            </div>

            {/* Floor Number and Square Footage */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="floorNumber"
                >
                  Floor Number
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  type="text"
                  id="floorNumber"
                  value="30/08/2002"
                  readOnly
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="squareFootage"
                >
                  Square Footage
                </label>
                <button className="flex w-full p-2 border border-gray-300 rounded-lg">
                  <svg
                    className="h-6 w-6 ml-0 mr-10 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                    />
                  </svg>
                  View square footage
                </button>
              </div>
            </div>

            {/* Allowed Pets */}
            <div className="flex items-center mb-4">
              <label className="block text-gray-700 font-bold mr-4">
                Allowed Pets
              </label>
              <input type="checkbox" checked readOnly />
            </div>

            {/* Tenant Information */}
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="tenantInfo"
              >
                Tenant Information
              </label>
              <textarea
                id="tenantInfo"
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="4"
                readOnly
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button className="bg-orange-400 text-white px-4 py-2 rounded-lg flex items-center hover:bg-orange-500">
                <svg
                  className="h-5 w-5 mr-2 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M5 12l4-4m-4 4 4 4"
                  />
                </svg>
                Back
              </button>
              <button className="bg-orange-400 text-white px-4 py-2 rounded-lg flex items-center hover:bg-orange-500">
                <svg
                  class="w-5 h-5 mr-2 text-gray-800 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 11v5m0 0 2-2m-2 2-2-2M3 6v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Zm2 2v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8H5Z"
                  />
                </svg>
                Save
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailsApartment;
