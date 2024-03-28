import React, { useState, useEffect } from "react";

const Test = () => {
  const [startYear, setStartYear] = useState(2000); // Customizable starting year
  const [endYear, setEndYear] = useState(new Date().getFullYear()); // Current year

  // Generate an array of year options
  const getYears = () => {
    const years = [];
    for (let i = startYear; i <= endYear; i++) {
      years.push(i);
    }
    return years;
  };

  const years = getYears();

  return (
    <div>
      <label htmlFor="startYear">Start Year:</label>
      <select
        id="startYear"
        value={startYear}
        onChange={(e) => setStartYear(parseInt(e.target.value))}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <label htmlFor="endYear">End Year:</label>
      <select
        id="endYear"
        value={endYear}
        onChange={(e) => setEndYear(parseInt(e.target.value))}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Test;
