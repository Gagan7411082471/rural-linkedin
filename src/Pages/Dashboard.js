import React, { useState, useEffect } from 'react';

const DashBoard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs from an API and update state
    fetch('/api/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div>
      <h1>Job Dashboard</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashBoard;
