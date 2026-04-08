import React from "react";

function AnalyticsCard({ data }) {
  let status = "";
  let color = "";

  if (data.value >= 80) {
    status = "High";
    color = "green";
  } else if (data.value >= 50) {
    status = "Moderate";
    color = "orange";
  } else {
    status = "Low";
    color = "red";
  }

  return (
    <div className="card">
      <h3>{data.metric}</h3>
      <p>Value: {data.value}</p>
      <p style={{ color }}>{status}</p>
    </div>
  );
}

export default AnalyticsCard;
