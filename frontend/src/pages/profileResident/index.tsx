import { LoadingLottie } from '../../components';
import { useGetRequestsQuery } from '../../store/api/endpoints/request';
import { setBreadCrumb } from '../../store/slice/app';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Sidebar from './components/SideBar';
import ProfileInfo from './components/ProfileInfo';
const ProfileResidentPage = () => {
    const dispatch = useDispatch();
    dispatch(setBreadCrumb([
        {
            title: "Dashboard",
            link: "/"

        },
        {
            title: "Profile Resident",
            link: "/profileresident",
        },
    ]));
    const { isLoading } = useGetRequestsQuery({});
    const [activeTab, setActiveTab] = useState<string>("Personal Information");
    if (isLoading) {
        return (
            <div className=" flex justify-center pt-10">
                <div className=" w-[250px] ">
                    <LoadingLottie />
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col md:flex-row  md:h-screen p-4">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                <ProfileInfo activetab={activeTab} />
            </div>
        )
    }
}
export default ProfileResidentPage;