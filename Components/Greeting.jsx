function Greeting({name,children}) {
    return (
        <>
        <h1>Travel home. </h1>
        <p> Welcome to Your Travel Companion! 
Embark on a journey of discovery and adventure with our comprehensive travel planning and recording platform. At Your Travel Companion, we understand that every traveler is unique, with distinct preferences, budgets, and dreams. Whether you are a seasoned explorer or planning your very first trip, we are here to make your travel experience seamless, enjoyable, and tailored to your individual needs.</p>
<p>

Discover Your Passport to Adventure

Passport Eligibilities
Navigate the world of travel documentation effortlessly. Learn about passport requirements, eligibility criteria, and essential information to ensure you are ready to explore any corner of the globe.
</p>

<p>
Visa Requirements
Simplify your journey by exploring visa requirements for various destinations. Our user-friendly interface provides up-to-date information, making the visa application process a breeze.
</p>

<p>
Plan Your Dream Escape

Budget-Friendly Options
Traveling on a budget? No problem! Explore affordable destinations, find budget-friendly accommodation, and discover tips to make the most of every travel dollar.
</p>

<p>Taste of Places
Define your travel experience based on your tastes. Whether you crave cultural immersion, culinary delights, or thrilling adventures, we have got the perfect destination recommendations for you.</p>

<p>
Record Your Adventures
Travel Journal
Capture the essence of your journey with our integrated travel journal. Share your experiences, upload photos, and create lasting memories that you can revisit and cherish.
</p>

<p>Itinerary Builder
Craft your personalized itinerary with our easy-to-use planner. Organize your days, manage reservations, and ensure you do not miss a moment of your travel adventure.

Your Travel Companion is more than a platform; it is a doorway to endless possibilities. Start your journey with us, and let the world unfold before you. Wherever you go, whatever your dream, let us be the compass guiding you to extraordinary experiences. Happy travels!
</p>
        <h2> Hello {name ? name : "fellow traveller!"}</h2>
        {children}
    </>
    )
}
export default Greeting;