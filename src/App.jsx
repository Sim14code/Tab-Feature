import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState, useRef, useEffect } from "react";

const cityNames = ["Gurugram", "Delhi", "Noida"];

function App() {
  const [count, setCount] = useState(0);
  const [selectedCity, setSelectedCity] = useState("Gurugram");
  const containerRef = useRef(null);
  const [highlightStyle, setHighlightStyle] = useState({});

  useEffect(() => {
    if (!containerRef.current) return;
    const cityDivs = containerRef.current.querySelectorAll(".city-wrapper");
    const index = cityNames.indexOf(selectedCity);
    const selectedDiv = cityDivs[index];

    if (selectedDiv) {
      setHighlightStyle({
        width: selectedDiv.offsetWidth,
        left: selectedDiv.offsetLeft,
        top: selectedDiv.offsetTop,
        height: selectedDiv.offsetHeight,
      });
    }
  }, [selectedCity]);

  return (
    <>
      <h1 className="text-3xl font-bold underline"> Tailwind</h1>
    </>
    <div className="font-montserrat m-6">
      <h1 className="text-black text-6xl font-bold leading-[75px] mb-8">
        POPULAR SEARCHES
      </h1>

      <div
        className="relative px-1 py-[3px] bg-gray-200 rounded-3xl inline-flex justify-start items-center gap-2.5 select-none"
        ref={containerRef}
      >
        {/* Sliding black highlight box */}
        <div
          className="absolute bg-black rounded-[50px] transition-all duration-300 ease-in-out"
          style={{
            width: highlightStyle.width,
            height: highlightStyle.height,
            left: highlightStyle.left,
            top: highlightStyle.top,
          }}
        />

        {/* City buttons */}
        {cityNames.map((city) => {
          const isSelected = city === selectedCity;
          return (
            <div
              key={city}
              className="city-wrapper px-4 py-2 rounded-[50px] flex justify-center items-center gap-2.5 cursor-pointer relative z-10"
              onClick={() => setSelectedCity(city)}>
              <div
                className={`justify-start font-['Poppins'] ${
                  isSelected
                    ? "text-white text-sm font-normal leading-none"
                    : "text-neutral-600 text-base font-medium leading-tight"
                }`}
              >
                {city}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
export default App;