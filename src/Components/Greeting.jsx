function Greeting({ name, children }) {
  const imageContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  };

  const imageStyle = {
    backgroundColor: "black",
    width: "200px",
    height: "150px",
    border: "1px solid black",
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          border: "solid",
          padding: "20px",
        }}
      >
        <h1>Travel + Travel + Travel....= ∞ </h1>
        <p style={{ fontStyle: "italic" }}>
          Explore infinite possibilities through travel
        </p>
        <p>
          {" "}
          Welcome to Your Travel Companion! Embark on a journey of discovery and
          adventure with our comprehensive travel planning and recording
          platform. At Your Travel Companion, we understand that every traveler
          is unique, with distinct preferences, budgets, and dreams. Whether you
          are a seasoned explorer or planning your very first trip, we are here
          to make your travel experience seamless, enjoyable, and tailored to
          your individual needs.
        </p>
        <div style={imageContainerStyle}>
          <img
            src="../src/assets/Waterfall.jpg"
            alt="Travel makes one modest, you see what a tiny place you occupy in the world. - Gustave Flaubert"
            style={imageStyle}
          />
          <p
            style={{
              fontStyle: "italic",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            "Travel makes one modest, you see what a tiny place you occupy in
            the world." - Gustave Flaubert"
          </p>
        </div>

        <br />
        <h2>Discover Your Passport to Adventure:</h2>

        <p>
          Passport Eligibilities: Navigate the world of travel documentation
          effortlessly. Learn about passport requirements, eligibility criteria,
          and essential information to ensure you are ready to explore any
          corner of the globe.
        </p>
        <div style={imageContainerStyle}>
          <img
            src="../src/assets/River.jpg"
            alt="description_of_image"
            style={imageStyle}
          />
          <p
            style={{
              fontStyle: "italic",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            "To travel is to discover that everyone is wrong about other
            countries." - Aldous Huxley
          </p>
        </div>

        <h2>Visa Requirements</h2>
        <p>
          Simplify your journey by exploring visa requirements for various
          destinations. Our user-friendly interface provides up-to-date
          information, making the visa application process a breeze.
        </p>
        <div style={imageContainerStyle}>
          <img
            src="../src/assets/Scenery.jpg"
            alt="description_of_image"
            style={imageStyle}
          />
          <p
            style={{
              fontStyle: "italic",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            "Travel far enough, you meet yourself." - David Mitchell
          </p>
        </div>

        <p>
          Budget-Friendly Options Traveling on a budget? No problem! Explore
          affordable destinations, find budget-friendly accommodation, and
          discover tips to make the most of every travel dollar.If you are
          looking for luxury travel options, you can find them too in here!
        </p>
        <div style={imageContainerStyle}>
          <img
            src="../src/assets/Dollars.jpg"
            alt="description_of_image"
            style={imageStyle}
          />
          <p
            style={{
              fontStyle: "italic",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            "Travel is the only thing you can buy that makes you richer." -
            Anonymous
          </p>
        </div>

        <h2>Taste of Places</h2>
        <p>
          {" "}
          Define your travel experience based on your tastes. Whether you crave
          cultural immersion, culinary delights, or thrilling adventures, we
          have got the perfect destination recommendations for you.
        </p>
        <div style={imageContainerStyle}>
          <img
            src="../src/assets/Culinary.jpg"
            alt="description_of_image"
            style={imageStyle}
          />
          <p
            style={{
              fontStyle: "italic",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            "Live your life by a compass, not a clock." - Stephen Covey"
          </p>
        </div>
        <h2>Record Your Adventures</h2>

        <p>
          Travel Journal Capture the essence of your journey with our integrated
          travel journal. Share your experiences, upload photos, and create
          lasting memories that you can revisit and cherish.
        </p>
        <div style={imageContainerStyle}>
          <img
            src="../src/assets/Diary.jpg"
            alt="description_of_image"
            style={imageStyle}
          />
          <p
            style={{
              fontStyle: "italic",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            "Your life is your itinerary; make sure it's filled with the places,
            people, and experiences that truly matter." - Anonymous
          </p>
        </div>

        <h2>Itinerary Builder</h2>
        <p>
          Craft your personalized itinerary with our easy-to-use planner.
          Organize your days, manage reservations, and ensure you do not miss a
          moment of your travel adventure. Your Travel Companion is more than a
          platform; it is a doorway to endless possibilities. Start your journey
          with us, and let the world unfold before you. Wherever you go,
          whatever your dream, let us be the compass guiding you to
          extraordinary experiences. Happy travels!
        </p>

        <div style={imageContainerStyle}>
          <img
            src="../src/assets/Passport1.jpg"
            alt="description_of_image"
            style={imageStyle}
          />
          <p
            style={{
              fontStyle: "italic",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            "A passport is your ticket to explore, to dream, and to discover the
            beauty of the world." - Anonymous
          </p>
        </div>

        {/* ... (similar structure for other sections) */}

        <h2>
          {" "}
          Hello {name ? name : "fellow traveller! Let your journey begin"}
        </h2>
        {children}
      </div>
    </>
  );
}

export default Greeting;
