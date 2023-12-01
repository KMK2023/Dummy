

function Landscapes() {


  <h2>Top Trending Destinations</h2>;

  const Singapore = {
    name: "Singapore",
    alias: "The red dot",
    img: "../src/assets/Singapore.jpg",
    Tidbits:
      "Located in South East Asia, one of the most famous travel hub & stopover that connects most parts of South-East Asia",
  };

  const Australia = {
    name: "Australia",
    alias: "Downunder",
    img: "../src/assets/River.jpg",
    Tidbits: "The most Isolated continent",
  };

  const India = {
    name: "India",
    alias: "Bharath",
    img: "../src/assets/TeaEstates.jpg",
    Tidbits: "The land of colours, cultures",
  };

  const Thailand = {
    name: "Thailand",
    alias: "Thai",
    img: "../src/assets/Tradition.jpg",
    Tidbits:
      "An affordable tourist destination that has a lot of natural beaches, outdoor shopping and also a great shopping destinations",
  };

  const data = [Singapore, Australia, India, Thailand];

  // Step: To call forth the above drefined constants to be displayed
  const getcountryData = (country) => {
    return (
<>

      <div style={{ color: "#ffffff", padding: "40px", display: "grid" }}>
        <img
          src={country.img}
          alt={country.name}
          style={{ maxWidth: "50vh", height: "auto" }}
        />
        <h3>{country.name}</h3>
        <blockquote>{country.alias}</blockquote>
        <p>{country.Tidbits}</p>
      </div>
      </>
    );
    x;
  };

  return (
    
    <div style={{ display: "flex", background: "#000000", border: "solid" }}>
      {data.map((somecountry) => {
        return getcountryData(somecountry);
      })}
    </div>
  );
}

export default Landscapes;
