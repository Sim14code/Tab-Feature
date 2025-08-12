import "./App.css";
import { useState, useRef, useEffect } from "react";

const cityNames = ["Gurugram", "Delhi", "Noida"];

function App() {
  const data = {
    Gurugram: [
      { name: "Women Body Massage Centre In Gurugram", link: "#" },
      { name: "Beauty Spa For Women In Gurugram", link: "#" },
      { name: "Saloon In Gurugram", link: "#" },
      { name: "Beauty Parlours In Gurugram", link: "#" },
      { name: "Female Psychiatrists In Gurugram", link: "#" },
      { name: "Yoga Class For Women In Gurugram", link: "#" },
      { name: "Skin Care For Females In Gurugram", link: "#" },
      { name: "Female Physiotherapist In Gurugram", link: "#" },
      { name: "Female Music Teacher In Gurugram", link: "#" },
      { name: "Female Hair Stylists In Gurugram", link: "#" },
      { name: "Female Ayurvedic Doctor In Gurugram", link: "#" },
      { name: "Best Restaurants For Women In Gurugram", link: "#" },
      { name: "Female Yoga Trainer In Gurugram", link: "#" },
      { name: "Education Consultant In Gurugram", link: "#" },
      { name: "Female Homoeopathic Doctor In Gurugram", link: "#" },
      { name: "Women Rejuvenation Center In Gurugram", link: "#" },
      { name: "Women Mental Health", link: "#" },
      { name: "Women Life Coach In Gurugram", link: "#" },
      { name: "Restaurants In Gurugram", link: "#" },
      { name: "Women friendly Bars In Gurugram", link: "#" },
      { name: "Online Classes for Women", link: "#" },
      { name: "Wellness Tourism For Women", link: "#" },
      { name: "Solo Female Travel Groups in Gurugram", link: "#" },
      { name: "Female Fitness Trainers In Gurugram", link: "#" },
      { name: "Beauty & Fashion", link: "#" },
      { name: "Health & Fitness", link: "#" },
      { name: "Education & Career", link: "#" },
      { name: "Makeup Artists In Gurugram", link: "#" },
      { name: "Women Ayurvedic Doctor In Gurugram", link: "#" },
      { name: "Women Body Therapies In Gurugram", link: "#" },
      { name: "Women Party Groups In Gurugram", link: "#" },
      { name: "Women Helpline In Gurugram", link: "#" },
      { name: "Women Home Tutor In Gurugram", link: "#" },
      { name: "Women Legal Services In Gurugram", link: "#" },
      { name: "Female Local Meetup In Gurugram", link: "#" },
      { name: "Kitty Party Venues In Gurugram", link: "#" },
      { name: "Female Dietician In Gurugram", link: "#" },
      { name: "Female Nutritionists In Gurugram", link: "#" },
      { name: "Meditation Centre In Gurugram", link: "#" },
      { name: "Gynecologist In Gurugram", link: "#" },
      { name: "Cosmetologist In Gurugram", link: "#" },
      { name: "Women Jobs In Gurugram", link: "#" },
      { name: "Women Legal Services In Gurugram", link: "#" },
      { name: "Women Party Place In Gurugram", link: "#" },
      { name: "Women Career Coach In Gurugram", link: "#" },
      { name: "Women Entrepreneur", link: "#" },
      { name: "Part Time Job For Women In Gurugram", link: "#" },
      { name: "Women Coaching Centre In Gurugram", link: "#" },
      { name: "Home-Based Job For Women In Gurugram", link: "#" },
    ],
    Delhi: [
      { name: "Women Body Massage Centre In Delhi", link: "#" },
      { name: "Beauty Spa For Women In Delhi", link: "#" },
      { name: "Saloon In Delhi", link: "#" },
      { name: "Beauty Parlours In Delhi", link: "#" },
      { name: "Female Psychiatrists In Delhi", link: "#" },
      { name: "Yoga Class For Women In Delhi", link: "#" },
      { name: "Skin Care For Females In Delhi", link: "#" },
      { name: "Female Physiotherapist In Delhi", link: "#" },
      { name: "Female Music Teacher In Delhi", link: "#" },
      { name: "Female Hair Stylists In Delhi", link: "#" },
      { name: "Female Ayurvedic Doctor In Delhi", link: "#" },
      { name: "Best Restaurants For Women In Delhi", link: "#" },
      { name: "Female Yoga Trainer In Delhi", link: "#" },
      { name: "Education Consultant In Delhi", link: "#" },
      { name: "Female Homoeopathic Doctor In Delhi", link: "#" },
      { name: "Women Rejuvenation Center In Delhi", link: "#" },
      { name: "Women Mental Health", link: "#" },
      { name: "Women Life Coach In Delhi", link: "#" },
      { name: "Restaurants In Delhi", link: "#" },
      { name: "Women friendly Bars In Delhi", link: "#" },
      { name: "Online Classes for Women", link: "#" },
      { name: "Wellness Tourism For Women", link: "#" },
      { name: "Solo Female Travel Groups in Delhi", link: "#" },
      { name: "Female Fitness Trainers In Delhi", link: "#" },
      { name: "Beauty & Fashion", link: "#" },
      { name: "Health & Fitness", link: "#" },
      { name: "Education & Career", link: "#" },
      { name: "Makeup Artists In Delhi", link: "#" },
      { name: "Women Ayurvedic Doctor In Delhi", link: "#" },
      { name: "Women Body Therapies In Delhi", link: "#" },
      { name: "Women Party Groups In Delhi", link: "#" },
      { name: "Women Helpline In Delhi", link: "#" },
      { name: "Women Home Tutor In Delhi", link: "#" },
      { name: "Women Legal Services In Delhi", link: "#" },
      { name: "Female Local Meetup In Delhi", link: "#" },
      { name: "Kitty Party Venues In Delhi", link: "#" },
      { name: "Female Dietician In Delhi", link: "#" },
      { name: "Female Nutritionists In Delhi", link: "#" },
      { name: "Meditation Centre In Delhi", link: "#" },
      { name: "Gynecologist In Delhi", link: "#" },
      { name: "Cosmetologist In Delhi", link: "#" },
      { name: "Women Jobs In Delhi", link: "#" },
      { name: "Women Legal Services In Delhi", link: "#" },
      { name: "Women Party Place In Delhi", link: "#" },
      { name: "Women Career Coach In Delhi", link: "#" },
      { name: "Women Entrepreneur", link: "#" },
      { name: "Part Time Job For Women In Delhi", link: "#" },
      { name: "Women Coaching Centre In Delhi", link: "#" },
      { name: "Home-Based Job For Women In Delhi", link: "#" },
    ],
    Noida: [
      { name: "Women Body Massage Centre In Noida", link: "#" },
      { name: "Beauty Spa For Women In Noida", link: "#" },
      { name: "Saloon In Noida", link: "#" },
      { name: "Beauty Parlours In Noida", link: "#" },
      { name: "Female Psychiatrists In Noida", link: "#" },
      { name: "Yoga Class For Women In Noida", link: "#" },
      { name: "Skin Care For Females In Noida", link: "#" },
      { name: "Female Physiotherapist In Noida", link: "#" },
      { name: "Female Music Teacher In Noida", link: "#" },
      { name: "Female Hair Stylists In Noida", link: "#" },
      { name: "Female Ayurvedic Doctor In Noida", link: "#" },
      { name: "Best Restaurants For Women In Noida", link: "#" },
      { name: "Female Yoga Trainer In Noida", link: "#" },
      { name: "Education Consultant In Noida", link: "#" },
      { name: "Female Homoeopathic Doctor In Noida", link: "#" },
      { name: "Women Rejuvenation Center In Noida", link: "#" },
      { name: "Women Mental Health", link: "#" },
      { name: "Women Life Coach In Noida", link: "#" },
      { name: "Restaurants In Noida", link: "#" },
      { name: "Women friendly Bars In Noida", link: "#" },
      { name: "Online Classes for Women", link: "#" },
      { name: "Wellness Tourism For Women", link: "#" },
      { name: "Solo Female Travel Groups in Noida", link: "#" },
      { name: "Female Fitness Trainers In Noida", link: "#" },
      { name: "Beauty & Fashion", link: "#" },
      { name: "Health & Fitness", link: "#" },
      { name: "Education & Career", link: "#" },
      { name: "Makeup Artists In Noida", link: "#" },
      { name: "Women Ayurvedic Doctor In Noida", link: "#" },
      { name: "Women Body Therapies In Noida", link: "#" },
      { name: "Women Party Groups In Noida", link: "#" },
      { name: "Women Helpline In Noida", link: "#" },
      { name: "Women Home Tutor In Noida", link: "#" },
      { name: "Women Legal Services In Noida", link: "#" },
      { name: "Female Local Meetup In Noida", link: "#" },
      { name: "Kitty Party Venues In Noida", link: "#" },
      { name: "Female Dietician In Noida", link: "#" },
      { name: "Female Nutritionists In Noida", link: "#" },
      { name: "Meditation Centre In Noida", link: "#" },
      { name: "Gynecologist In Noida", link: "#" },
      { name: "Cosmetologist In Noida", link: "#" },
      { name: "Women Jobs In Noida", link: "#" },
      { name: "Women Legal Services In Noida", link: "#" },
      { name: "Women Party Place In Noida", link: "#" },
      { name: "Women Career Coach In Noida", link: "#" },
      { name: "Women Entrepreneur", link: "#" },
      { name: "Part Time Job For Women In Noida", link: "#" },
      { name: "Women Coaching Centre In Noida", link: "#" },
      { name: "Home-Based Job For Women In Noida", link: "#" },
    ],
  };

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
    <div className="font-montserrat m-6">
      <h1 className="text-black text-6xl font-bold leading-[75px] mb-8">
        POPULAR SEARCHES
      </h1>

      <div
        className="relative px-1 py-[3px] bg-gray-200 rounded-3xl inline-flex justify-start items-center gap-2.5 select-none"
        ref={containerRef}
      >
        <div
          className="absolute bg-black rounded-[50px] transition-all duration-300 ease-in-out"
          style={{
            width: highlightStyle.width,
            height: highlightStyle.height,
            left: highlightStyle.left,
            top: highlightStyle.top,
          }}
        />

        {cityNames.map((city) => {
          const isSelected = city === selectedCity;
          return (
            <div
              key={city}
              className="city-wrapper px-4 py-2 rounded-[50px] flex justify-center items-center gap-2.5 cursor-pointer relative z-10"
              onClick={() => setSelectedCity(city)}
            >
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

      <div className="mt-6 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-3 p-4 bg-white shadow-2xl rounded-xl  sm:w-[45rem] lg:w-full">
        {data[selectedCity].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block px-4 py-3 rounded-lg bg-white text-[#121212] font-poppins text-sm leading-[150%] hover:bg-gray-100 transition"
            style={{ textDecoration: "none" }}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
