import React, { useEffect, useState } from "react";
import video from "../../components/assets/video/landing.mp4";
import ImageAboutUs from "../../components/assets/image/landing.jpg";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaUserGroup, FaBuildingUser } from "react-icons/fa6";
import { FaMoneyCheckAlt, FaUserShield } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";

import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";

const Landing: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [opacity, setOpacity] = useState(1);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const newOpacity = Math.max(1 - scrollY / 200, 0);
        setOpacity(newOpacity);
    }, [scrollY]);

    return (
        <div className="w-full h-full flex flex-col relative">
            <div className="hidden md:block" id="home-section">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-[calc(100vh-56px)] object-cover"
                    src={video}
                >
                    Your browser does not support the video tag.
                </video>
            </div>
            <div id="home-section-mobile" className="block md:hidden bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${ImageAboutUs})` }}>
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-white text-center">Welcome to<br />MOCK CARE</h1>
                </div>
            </div >
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold leading-[1.2em] drop-shadow-xl hidden md:flex md:flex-col md:items-center md:text-center"
                style={{ opacity }}
            >
                <span className="block md:hidden">Welcome to</span>
                <span className="block md:hidden">MOCK CARE</span>
                <span className="hidden md:block">Welcome to<br />MOCK CARE</span>
            </div>
            <div className="flex pt-20" id="about-us-section">
                <div className="hidden md:block w-full md:w-1/2 pr-4 flex items-center">
                    <img src={ImageAboutUs} className="w-full h-full object-cover" alt="About Us" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center ml-0 md:ml-10">
                    <h1 className="text-4xl md:text-7xl font-bold px-4 md:px-8 text-center">About us</h1>
                    <p className="text-lg md:text-2xl leading-[2em] text-justify px-6 md:px-8">
                        We are a dedicated team providing professional condominium building management solutions in the United States.
                        With years of experience in property management, we are committed to delivering high-quality services, ensuring your building operates efficiently while guaranteeing the safety and comfort of its residents.
                        From financial management and human resources to maintenance and legal compliance, we strive to meet your needs with transparency and dedication.
                    </p>
                </div>
            </div>
            <div className="flex pt-20 justify-center">
                <div className="w-3/4">
                    <h1 className="text-4xl md:text-6xl font-bold text-center">Management Services</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-20">
                        <div className="flex mb-10">
                            <div className="w-16 h-16 flex items-center justify-center mr-4">
                                <HiMiniWrenchScrewdriver className="text-5xl" />
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold">Property Maintenance and Repairs</h2>
                                <p>Regular upkeep and repairs of apartment infrastructure (plumbing, electrical systems, etc.), including emergency maintenance services.</p>
                            </div>
                        </div>
                        <div className="flex mb-10">
                            <div className="w-16 h-16 flex items-center justify-center mr-4">
                                <FaUserGroup className="text-5xl" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">Tenant Management (Leasing and Renewals)</h2>
                                <p>Handling tenant agreements, renewals, rent collection, and tenant support. This includes managing move-ins and move-outs, resolving tenant complaints, and processing lease terminations.</p>
                            </div>
                        </div>
                        <div className="flex mb-10">
                            <div className="w-16 h-16 flex items-center justify-center mr-4">
                                <FaMoneyCheckAlt className="text-5xl" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">Financial and Billing Services</h2>
                                <p>Managing all financial aspects, including rent collection, utility billing, service charges, and financial reporting for the apartment complex.</p>
                            </div>
                        </div>
                        <div className="flex mb-10">
                            <div className="w-16 h-16 flex items-center justify-center mr-4">
                                <FaUserShield className="text-5xl" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">Security Management</h2>
                                <p>Overseeing the physical security of the apartment premises through surveillance, access control, security personnel, and emergency protocols.</p>
                            </div>
                        </div>
                        <div className="flex mb-10">
                            <div className="w-16 h-16 flex items-center justify-center mr-4">
                                <IoChatbubblesSharp className="text-5xl" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">Customer Service and Communication</h2>
                                <p>Offering a communication channel for tenants to make inquiries, report problems, and receive updates (e.g., email, phone, or app-based notifications). This could include customer support via a mobile app for maintenance requests or updates on building operations.</p>
                            </div>
                        </div>
                        <div className="flex mb-10">
                            <div className="w-16 h-16 flex items-center justify-center mr-4">
                                <FaBuildingUser className="text-5xl" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">Facility and Amenity Management</h2>
                                <p>Managing and maintaining shared amenities such as swimming pools, gyms, parking spaces, and other facilities offered to residents. This includes scheduling, cleaning, and ensuring compliance with safety standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-20 justify-center" id="contact-us">
                <div className="w-full max-w-md p-8 rounded-lg">
                    <h1 className="text-4xl md:text-6xl font-bold text-center">Leave a message</h1>
                    <p className="text-center mb-4">Get in Touch<br />Let's chat about your real estate management needs.</p>
                    <form>
                        <Input className="mb-4 bg-light w-full" placeholder="First & Last Name" required />
                        <Input className="mb-4 bg-light w-full" type="email" placeholder="Email" required />
                        <Input className="mb-4 bg-light w-full" type="tel" placeholder="Phone" required />
                        <Textarea className="mb-4 bg-light w-full" placeholder="Describe your property needs" required />
                        <div className="flex justify-center">
                            <Button type="submit" className="h-10 bg-white text-dark font-bold rounded-md hover:bg-[#F8A869] hover:text-white">Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
            <footer className="bg-[#F8A869] py-8">
                <div className="container mx-auto flex flex-wrap justify-between text-white">
                    <div>
                        <h2 className="text-lg font-bold">Reach us</h2>
                        <p>📞 +1012 3456 789</p>
                        <p>✉️ demo@gmail.com</p>
                        <p>📍 132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">Company</h2>
                        <p>About</p>
                        <p>Contact</p>
                        <p>Blogs</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">Legal</h2>
                        <p>Privacy Policy</p>
                        <p>Terms & Services</p>
                        <p>Terms of Use</p>
                        <p>Refund Policy</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">Quick Links</h2>
                        <p>Techlabz Keybox</p>
                        <p>Downloads</p>
                        <p>Forum</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">Join Our Newsletter</h2>
                        <Input type="email" placeholder="Your email address" className="bg-light text-black" />
                        <Button className="mt-2 bg-white text-[#F8A869] font-bold rounded-md px-4 py-2 hover:bg-[#F8A869] hover:text-white">Subscribe</Button>
                        <p className="text-sm">* Will send you weekly updates for your better tool management.</p>
                    </div>
                </div>
            </footer>
        </div >
    );
}

export default Landing;
