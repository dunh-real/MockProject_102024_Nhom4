import React from "react";
import { Navigate } from "react-router-dom";

const Home: React.FC = () => {
  return <Navigate to={"/dashboard"} />;
};

export default Home;
