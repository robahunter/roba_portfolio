import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GitLabContributions = ({ username }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Process the fetched events into a grid (week + day) structure
  const processData = (events) => {
    const contributions = {};

    // Group commits by date
    events.forEach((event) => {
      const date = new Date(event.created_at).toISOString().split('T')[0]; // YYYY-MM-DD
      if (!contributions[date]) {
        contributions[date] = 0;
      }
      contributions[date] += 1; // Increment commit count for the day
    });

    // Convert to an array and format it to a grid structure
    const gridData = [];
    const daysInWeek = 7;
    const sortedDates = Object.keys(contributions).sort();

    let week = [];
    sortedDates.forEach((date, index) => {
      week.push({ date, commits: contributions[date] });
      if (week.length === daysInWeek) {
        gridData.push(week);
        week = [];
      }
    });

    // Fill in any empty slots for incomplete weeks
    if (week.length > 0) {
      while (week.length < daysInWeek) {
        week.push({ date: null, commits: 0 });
      }
      gridData.push(week);
    }

    return gridData; // Ensure gridData is an array of arrays (weeks)
  };

  useEffect(() => {
    const fetchContributions = async () => {
      const token = process.env.REACT_APP_GITLAB_TOKEN; // Access the token from .env
      const url = `https://gitlab.com/api/v4/users/${username}/events?action=pushed`;
      let allEvents = [];
      let page = 1;

      try {
        setLoading(true); // Start loading state
        setError(null); // Reset error

        // Loop through the pages to get all events
        while (true) {
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              page,  // Page number
              per_page: 100,  // Number of results per page
            },
          });

          if (response.data.length === 0) break;  // Exit if no more data

          allEvents = [...allEvents, ...response.data]; // Add events from this page
          page += 1; // Move to the next page
        }

        const chartData = processData(allEvents); // Process the data to match your chart structure
        setData(chartData);
      } catch (error) {
        console.error('Error fetching GitLab data:', error);
        setError('Error fetching contributions.');
      } finally {
        setLoading(false); // End loading state
      }
    };

    if (username) {
      fetchContributions();
    }
  }, [username]); // Run effect when username changes

  // Color scale based on commits per day (from 0 to 5+ commits)
  const getColor = (commits) => {
    if (commits === 0) return '#ebedf0'; // Lightest (no commits)
    if (commits <= 1) return '#c6e48b'; // Light green
    if (commits <= 2) return '#7bc96f'; // Medium green
    if (commits <= 3) return '#239a3b'; // Darker green
    return '#196127'; // Darkest (many commits)
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>GitLab Contributions</h2>

      {/* Loading Spinner */}
      {loading && (
        <div style={{ textAlign: 'center' }}>
          <div className="spinner"></div>
        </div>
      )}

      {/* Error Message */}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {/* Contributions Grid */}
      {!loading && !error && (
        <div
          style={{
            maxWidth: '800px', // Max width for the container
            margin: '0 0',  // Center the grid horizontally
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '6px', // Reduced gap between items
          }}
        >
          {data.map((week, weekIndex) => (
            <div key={weekIndex} style={{ display: 'flex', flexDirection: 'row' }}>
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  style={{
                    width: '25px', // Smaller size for the boxes
                    height: '25px',
                    backgroundColor: getColor(day.commits),
                    borderRadius: '4px', // Slightly rounded corners
                    display: 'inline-block',
                    transition: 'background-color 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    transform: 'scale(1)',
                  }}
                  title={`${day.date || 'No activity'}: ${day.commits} commits`}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Add a simple spinner style (you can customize this as needed)
const style = document.createElement('style');
style.innerHTML = `
  .spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 20px auto;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

document.head.appendChild(style);

export default GitLabContributions;
