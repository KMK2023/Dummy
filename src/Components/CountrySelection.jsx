// // import React from 'react';

// function CountrySelection() {
//   const Locationtype = ['Scenic', 'Shopping hubs', 'Capital cities', 'Outbacks'];
//   const Continents = ['Europe', 'Asia', 'Africa', 'Australia', 'Europe', 'Arctic', 'Antarctica'];
//   const pictures = [];

//   return (
//     <>
//       <h1>Welcome to Travel Favourite</h1>
//       <p>Welcome to travel tidbits, where you can save information about your travels.</p>

//       <div>
//         <h3>Location Types:</h3>
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           {Locationtype.map((type, index) => (
//             <li key={index} style={{ margin: '0', padding: '0' }}>
//               <a href={`#${type.toLowerCase()}`}>{type}</a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h3>Continents:</h3>
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           {Continents.map((continent, index) => (
//             <li key={index} style={{ margin: '0', padding: '0' }}>
//               <a href={`#${continent.toLowerCase()}`}>{continent}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default CountrySelection;


import React, { useState, useEffect } from 'react';

const apiUrl = 'https://restcountries.com/v3.1/all';

function CountrySelection() {
  const [continents, setContinents] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedContinent, setSelectedContinent] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Extract continents, countries, and cities from the API response
        const uniqueContinents = Array.from(new Set(data.map((country) => country.region)));
        const uniqueCountries = Array.from(new Set(data.map((country) => country.name.common)));
        const uniqueCities = Array.from(new Set(data.flatMap((country) => country.capital)));

        setContinents(uniqueContinents);
        setCountries(uniqueCountries);
        setCities(uniqueCities);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredCountries = countries.filter(
    (country) => !selectedContinent || selectedContinent === 'All' || continents[selectedContinent] === country.region
  );

  const filteredCities = cities.filter(
    (city) => !selectedCountry || selectedCountry === 'All' || countries[selectedCountry] === city
  );

  return (
    <div>
      <h1>Filtered Data</h1>

      <label>
        Select Continent:
        <select onChange={(e) => setSelectedContinent(e.target.value)}>
          <option value="">All</option>
          {continents.map((continent, index) => (
            <option key={index} value={index}>
              {continent}
            </option>
          ))}
        </select>
      </label>

      <label>
        Select Country:
        <select onChange={(e) => setSelectedCountry(e.target.value)}>
          <option value="">All</option>
          {filteredCountries.map((country, index) => (
            <option key={index} value={index}>
              {country}
            </option>
          ))}
        </select>
      </label>

      <label>
        Select City:
        <select>
          {filteredCities.map((city, index) => (
            <option key={index}>{city}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default CountrySelection;


