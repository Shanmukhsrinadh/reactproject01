import React from "react";
import Sidebar from "../Components/Sidebar";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav className="bg-dark text-white min-vh-100 p-3">
          {<Sidebar/>}
        </nav>


      </div>
    </div>
  );
};

export default Dashboard;
