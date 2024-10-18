import { useGetRequestsQuery } from '../../store/api/endpoints/request';
import { setBreadCrumb } from '../../store/slice/app';
import React, { Profiler, useState } from 'react'
import { useDispatch } from 'react-redux';
import { LoadingLottie } from '../../components';
import Profile from './components/tabs/Profile';
import ProfileInfo from './components/ProfileInfo';
import SideBar from '@/components/common/SideBar';
import Sidebar from './components/SideBar';
const ProfilePage = () => {
  const dispatch = useDispatch();
  dispatch(setBreadCrumb([
    {
      title: "Dashboard",
      link: "/"

    },
    {
      title: "Edit Profile",
      link: "/profile",
    },
  ]));
  const {isLoading } = useGetRequestsQuery({});
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
      <div className="flex flex-col md:flex-row bg-gray-100 h-full md:h-screen p-4">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProfileInfo activetab={activeTab} />
    </div>
    )
  }
}

export default ProfilePage;