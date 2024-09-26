// src/components/JobCard.js
import React from 'react';
import './JobCard.css'; // Ensure the path is correct

function JobCard({ title, description }) {
  return (
    <div className="job-card">
      <h2 className="job-title">{title}</h2>
      <p className="job-description">{description}</p>
      <button className="apply-button">Apply Now</button>
    </div>
  );
}

export default JobCard;
