import React from 'react'
import Profile from './tabs/Profile';
import Security from './tabs/Security';
import WorkPosition from './tabs/Work&Position';
interface ProfileProcs {
    activetab: string
}
const ProfileInfo: React.FC<ProfileProcs> = ({ activetab }) => {
    const renderContent = () => {
        switch (activetab) {
            case "Personal Information":
                return <Profile />;
            case "Security":
                return <Security />;
            case "Work & Position":
                return <WorkPosition />;
            default:
                return null;
        }
    };
    return (
        <div className="md:w-3/4 w-full bg-white rounded-lg p-6 ml-0 md:ml-4 shadow-lg">
            {renderContent()}
        </div>
    )
}

export default ProfileInfo