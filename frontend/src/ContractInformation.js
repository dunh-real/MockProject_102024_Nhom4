import React from "react";

const ContractInformation = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-[#F8A869] opacity-70 flex items-center justify-between px-6 py-4">
        <h1 className="text-gray text-3xl font-bold">MOCK CARE</h1>
        <div className="flex items-center space-x-4">
          <span>User Name</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"
            alt="avatar"
            className="rounded-full w-10 h-10"
          />
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="bg-[#FAF0E8] w-64 flex-shrink-0 mt-1">
          <nav className="flex flex-col ">
            <a
              href="#"
              className="p-2 pl-6 relative border-l-4 border-[#F8A869] hover:bg-black hover:text-white transition-all duration-300 border border-[#F8A869]"
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
              className="p-2 pl-6 relative text-white bg-black text-white hover:text-white transition-all duration-300 border border-[#F8A869]"
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

            {/* Add more links here */}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Contract information</h2>
          <div className="border-b-8 border-[#F8A869] opacity-[0.5] w-full mb-6"></div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
            <h2 className="text-2xl text-gray-700 font-bold text-center mb-8">
              CONTRACT OF EMPLOYMENT
            </h2>
            {/* Form Details */}
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  type="text"
                  id="fullName"
                  value="Trần Minh Quốc"
                  readOnly
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="cccd"
                >
                  CCCD/CMND
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  type="text"
                  id="cccd"
                  value="xxxxxxxxxxxx"
                  readOnly
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="dateOfBirth"
                >
                  Date of birth
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  type="text"
                  id="dateOfBirth"
                  value="30/08/2002"
                  readOnly
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="sex"
                >
                  Sex
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  type="text"
                  id="sex"
                  value="Nam"
                  readOnly
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="nationality"
                >
                  Nationality
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  type="text"
                  id="nationality"
                  value="Việt Nam"
                  readOnly
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="contact"
                >
                  Contact
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  type="text"
                  id="contact"
                  value="01234567890"
                  readOnly
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="hometown"
                >
                  Hometown
                </label>
                <textarea
                  id="hometown"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows="4"
                  readOnly
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </textarea>
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  type="email"
                  id="email"
                  value="tr********23@gmail.com"
                  readOnly
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="experience"
                >
                  Experience
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  type="text"
                  id="experience"
                  value="1"
                  readOnly
                />
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <button className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500">
                &lt;
              </button>
              <button className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500 mx-2">
                1
              </button>
              <button className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500 mx-2">
                2
              </button>
              <button className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500">
                &gt;
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContractInformation;
