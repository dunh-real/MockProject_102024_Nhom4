import React from 'react'

const Employment = () => {
    return (
        <div className="max-w-4xl mx-auto p-4  rounded-lg shadow-lg ">
            <h2 className="text-2xl text-center font-bold mb-6">CONTRACT OF EMPLOYMENT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-700 font-bold mb-1">Name</label>
                    <input
                        type="text"
                        value="Nguyen Van A"
                        className="w-full bg-gray-200 p-3 rounded-md"
                        disabled
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-1">Resident ID</label>
                    <input
                        type="text"
                        value="0123 4567 8910 1112"
                        className="w-full bg-gray-200 p-3 rounded-md"
                        disabled
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-1">Birth</label>
                    <input
                        type="text"
                        value="01/01/1990"
                        className="w-full bg-gray-200 p-3 rounded-md"
                        disabled
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-1">Sex</label>
                    <input
                        type="text"
                        value="Male"
                        className="w-full bg-gray-200 p-3 rounded-md"
                        disabled
                    />
                </div>
                <div>
                    <div className="">
                        <label className="block text-gray-700 font-bold mb-1">Nationalty</label>
                        <input
                            type="text"
                            value="VIET NAM"
                            className="w-full bg-gray-200 p-3 rounded-md"
                            disabled
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-1">Contact</label>
                    <input
                        type="text"
                        value="0111222333"
                        className="w-full bg-gray-200 p-3 rounded-md"
                        disabled
                    />
                </div>
                <div className='row-span-4'>
                    <label className="block text-gray-700 font-bold mb-1">Hometown</label>
                    <textarea
                        className="w-full bg-gray-200 h-[147px] p-3 rounded-md"
                        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        disabled
                    ></textarea>
                </div>
                <div className="">
                    <label className="block text-gray-700 font-bold mb-1">Email</label>
                    <input
                        type="Email"
                        value="tr***********23@gmail.com"
                        className="w-full bg-gray-200 p-3 rounded-md"
                        disabled
                    />
                </div>
                <div className="">
                    <label className="block text-gray-700 font-bold mb-1">Experience</label>
                    <input
                        type="number"
                        value="1"
                        className="w-full bg-gray-200 p-3 rounded-md"
                        disabled
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Employment