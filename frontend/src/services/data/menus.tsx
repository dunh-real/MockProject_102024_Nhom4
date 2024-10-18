import {
    Home,
    Users,
    Settings2,
  } from "tabler-icons-react";
  import { FaCodePullRequest } from "react-icons/fa6";
  interface MenuItem {
    title: string;
    link?: string;
    icon?: JSX.Element;
    children?: MenuItem[];
    isOpen?: boolean;
  }
  
  const menus: MenuItem[] = [
    {
      icon: <Home size={18} strokeWidth={2} />,
      title: "Dashboard",
      link: "/dashboard",
      isOpen: false,
    },
    {
      icon: <Users size={18} strokeWidth={2} />,
      title: "Users",
      link: "/users",
      isOpen: false,
    },
    {
      icon: <FaCodePullRequest size={18} strokeWidth={2} />,
      title: "Manage Request List",
      link: "/request",
      isOpen: false,
    },
    {
      icon: <Settings2 size={18} strokeWidth={2} />,
      title: "Settings",
      link: "/settings",
      isOpen: false,
    },
  ];
  
  export default menus;