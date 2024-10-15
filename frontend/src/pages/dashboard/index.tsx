import { setBreadCrumb } from "../../store/slice/app";
import React from "react";
import { useDispatch } from "react-redux";

function Dashboard() {
    const dispatch = useDispatch();
    dispatch(setBreadCrumb([{ title: "Dashboard", link: "/" }]));

    return (
        <p>This is Dashboard Page</p>
    );
}

export default Dashboard;