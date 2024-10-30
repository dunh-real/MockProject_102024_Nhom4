import {
  Home,
  Users,
  Category2,
  Package,
  Chalkboard,
  CalendarOff,
  ClockHour8,
  Briefcase,
  Building,
  WashMachine,
  Notification,
  CalendarEvent,
  MoodSad,
  Calendar,
  FileText,
  ReportMoney,
  Speakerphone,
  CurrencyDollar
} from "tabler-icons-react";

interface MenuItem {
  title: string;
  link?: string;
  icon?: JSX.Element;
  children?: MenuItem[];
  isOpen?: boolean;
}

//Menu items for each role
const adminMenus: MenuItem[] = [
  { icon: <Home size={18} strokeWidth={2} />, title: "Dashboard", link: "/dashboard" },
  { icon: <Users size={18} strokeWidth={2} />, title: "Accounts Manage", link: "/accounts-manage" },
  { icon: <Chalkboard size={18} strokeWidth={2} />, title: "Training Programs", link: "/training" },
  { icon: <CalendarOff size={18} strokeWidth={2} />, title: "Day Off Request Manage", link: "/day-off" },
  { icon: <ClockHour8 size={18} strokeWidth={2} />, title: "Time Keeping Manage", link: "/time-keeping" },
  { icon: <Briefcase size={18} strokeWidth={2} />, title: "Candidates Manage", link: "/candidates" },
  { icon: <Users size={18} strokeWidth={2} />, title: "Employee Contracts", link: "/employee-contracts" },
];

const managerMenus: MenuItem[] = [
  { icon: <Building size={18} strokeWidth={2} />, title: "Apartments Manage", link: "/apartments-manage" },
  { icon: <WashMachine size={18} strokeWidth={2} />, title: "Equipments Manage", link: "/categories-manage" },
  { icon: <Users size={18} strokeWidth={2} />, title: "Residents Manage", link: "/residents-manage" },
  { icon: <Notification size={18} strokeWidth={2} />, title: "Notifications", link: "/notifications" },
  { icon: <CalendarEvent size={18} strokeWidth={2} />, title: "Events Manage", link: "/events-manage" },
  { icon: <MoodSad size={18} strokeWidth={2} />, title: "Complaints Manage", link: "/complaints-manage" },
];

const staffMenus: MenuItem[] = [
  { icon: <Calendar size={18} strokeWidth={2} />, title: "Work Schedule", link: "/work-schedule" },
  { icon: <Chalkboard size={18} strokeWidth={2} />, title: "Training Programs", link: "/training-join" },
  { icon: <Speakerphone size={18} strokeWidth={2} />, title: "Requests From Manager", link: "/requests-from-manager" },
  { icon: <CurrencyDollar size={18} strokeWidth={2} />, title: "Salary & Bonus", link: "/salary" },
  { icon: <FileText size={18} strokeWidth={2} />, title: "Legal Documents", link: "/documents" },
];

const residentMenus: MenuItem[] = [
  { icon: <FileText size={18} strokeWidth={2} />, title: "Lease Contract", link: "/lease-contract" },
  { icon: <WashMachine size={18} strokeWidth={2} />, title: "Equipments/Facilities/Amenities", link: "/equipments-resident" },
  { icon: <ReportMoney size={18} strokeWidth={2} />, title: "Payment", link: "/payment" },
  { icon: <CalendarEvent size={18} strokeWidth={2} />, title: "Events", link: "/events-resident" },
  { icon: <MoodSad size={18} strokeWidth={2} />, title: "Complaints", link: "/complaints-resident" },
];

// Function to get menus based on role
export const getMenusByRole = (role: string): MenuItem[] => {
  switch (role) {
    case 'Admin':
      return adminMenus;
    case 'Manager':
      return managerMenus;
    case 'Staff':
      return staffMenus;
    case 'Resident':
      return residentMenus;
    default:
      return [];
  }
};