import React, { useState } from 'react';

function SearchParams() {
  const [location, setLocation] = useState('Seattle, WA');

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            type="text"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;

// Hooks can never be inside for loops or if statements
