import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUserInfo, saveUserInfo } from "../../store/slice/auth";
import { useLocation, useNavigate } from "react-router";
import useNetworkDetect from "../../hooks/useNetworkDetect";
//import { NetworkError } from "@/components";
import { getCookie } from "typescript-cookie";
import { ChildrenType } from "../../types";

const AuthGuardComponent: React.FC<ChildrenType> = ({ children }) => {
    const token = useSelector((state: any) => state?.auth?.token);
    const role = useSelector((state: any) => state?.auth?.role);
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isOnline } = useNetworkDetect();
    const isAuth = getCookie("token") ? true : false;

    // Checking Authentication
    const checkAuth = () => {
        if (!isAuth) {
            // Allow access to sign-in and sign-up pages
            if (location.pathname === "/auth/sign-in" || location.pathname === "/auth/sign-up") {
                return; // Do nothing, allow access
            }
            navigate("/landing");
            dispatch(removeUserInfo());
        } else {
            const userRole = role; // Get the role from state
            console.log("User Role:", userRole); // Log the role
            dispatch(saveUserInfo({ token: getCookie("token"), role: userRole }));
            // Redirect Back Home if Auth Layout
            if (
                location.pathname === "/auth/sign-in" ||
                location.pathname === "/auth/sign-up"
            ) {
                navigate("/");
            }
        }
    };

    useEffect(() => {
        checkAuth();
    }, [token, role]);

    return <div>{children}</div>;
};

export default AuthGuardComponent;
