import React from "react";
import { Link } from "react-router-dom";

function Dashboard(props: any) {
  return (
    <div>
      <p>Dashboard</p>
      <Link to="/users/list">
        <button className="border border-gray-500 p-2 rounded">User</button>
      </Link>
    </div>
  );
}

export default Dashboard;
