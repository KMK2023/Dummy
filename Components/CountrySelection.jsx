// import React from 'react';

function CountrySelection() {
  const Locationtype = ['Scenic', 'Shopping hubs', 'Capital cities', 'Outbacks'];
  const Continents = ['Europe', 'Asia', 'Africa', 'Australia', 'Europe', 'Arctic', 'Antarctica'];
  const pictures = [];

  return (
    <>
      <h1>Welcome to Travel Favourite</h1>
      <p>Welcome to travel tidbits, where you can save information about your travels.</p>

      <div>
        <h3>Location Types:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {Locationtype.map((type, index) => (
            <li key={index} style={{ margin: '0', padding: '0' }}>
              <a href={`#${type.toLowerCase()}`}>{type}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Continents:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {Continents.map((continent, index) => (
            <li key={index} style={{ margin: '0', padding: '0' }}>
              <a href={`#${continent.toLowerCase()}`}>{continent}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CountrySelection;

