import React, { useState } from "react";
import AddFilter from "../components/AddFilter.jsx";
import AnalyticsCard from "../components/AnalyticsCard.jsx";

function Dashboard({ logoutUser }) {
  const [filters, setFilters] = useState([]);
  const [analyticsData] = useState([
    { metric: "Sales", value: 75 },
    { metric: "Users", value: 40 },
    { metric: "Revenue", value: 90 }
  ]);

  const addFilter = (filter) => {
    setFilters([...filters, filter]);
  };

  return (
    <div>
      <h2>Analytics Dashboard</h2>

      <button onClick={logoutUser}>Logout</button>

      <AddFilter addFilter={addFilter} />

      <h3>Active Filters:</h3>
      <ul>
        {filters.map((f, index) => (
          <li key={index}>
            {f.category} : {f.value}
          </li>
        ))}
      </ul>

      <h3>Analytics Data</h3>
      <div className="card-container">
        {analyticsData.map((item, index) => (
          <AnalyticsCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
