import React, { useState } from "react";

function Slider() {
  const [sliderValue, setSliderValue] = useState(50); // Initial value, adjust as needed

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div
      className="Slider"
      style={{ border: "solid 2px", margin: "10em", padding: "10px" }}
    >
      <div>
        <h3>Slider with budget value</h3>

        <label htmlFor="slider">Slider:</label>
        <input
          type="range"
          id="slider"
          name="slider"
          min="0"
          max="10000"
          step="100"
          value={sliderValue}
          onChange={handleSliderChange}
        />

        <p>Selected Value: {sliderValue}</p>
      </div>
    </div>
  );
}

export default Slider;
