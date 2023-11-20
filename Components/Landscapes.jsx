function Landscapes(){

  <h2>Top Trending Destinations</h2>
  
          const Singapore = {
            name: "Singapore",
            alias: "The red dot",
            img: "../src/assets/Singapore.jpg",
            Tidbits: "Located in South East Asia, one of the most famous travel hub & stopover that connects most parts of South-East Asia",
          };
        
          const Australia = {
            name: "Australia",
            alias: "Downunder",
            img: "../src/assets/Singapore.jpg",
            Tidbits: "The most Isolated continent",
          };
        
          const India = {
            name: "India",
            alias: "Barath",
            img: "../src/assets/Singapore.jpg",
            Tidbits: "The land of colours, cultures",
          };

          const Thailand = {
            name: "Thailand",
            alias: "Thai",
            img: "../src/assets/Singapore.jpg",
            Tidbits: "One of the most affordable tourist destination that has a lot of natural beaches and also a shoppinng destinations"
          };

          const data =[Singapore, Australia, India, Thailand];

// Step: To call forth the above drefined constants to be displayed
          const getcountryData = (country) => {
            return (
              <div style={{ color: "white", backgroundColor: "black", padding: "10px" }}>
              <img src={country.img} alt={country.name} style={{ maxWidth: '30%', height: 'auto' }} />
              <h3>{country.name}</h3>
              <blockquote>{country.alias}</blockquote>
              <p>{country.Tidbits}</p>
              </div>
            );
          };
        
       return (
        <div>
       {data.map((somecountry) => {
        return getcountryData(somecountry);
        })}
       </div>
          );
        }

export default Landscapes;