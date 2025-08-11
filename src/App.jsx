import React, { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("Gurugram");

  const tabs = ["Gurugram", "Delhi", "Noida"];

  const data = {
    Gurugram: [
      { name: "Saloon In Gurugram", link: "#" },
      { name: "Beauty Parlours In Gurugram", link: "#" },
      { name: "Women Body Massage Centre In Gurugram", link: "#" },
      { name: "Beauty Spa For Women In Gurugram", link: "#" },
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
      { name: "Women Mental Health In Delhi", link: "#" },
      { name: "Women Life Coach In Delhi", link: "#" },
      { name: "Restaurants In Delhi", link: "#" },
      { name: "Women friendly Bars In Delhi", link: "#" },
      { name: "Online Classes for Women", link: "#" },
      { name: "Wellness Tourism For Women", link: "#" },
      { name: "Solo Female Travel Groups in Delhi", link: "#" },
      { name: "Female Fitness Trainer In Delhi", link: "#" },
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
      { name: "Meditation Centres In Delhi", link: "#" },
      { name: "Gynecologist In Delhi", link: "#" },
      { name: "Cosmetologist In Delhi", link: "#" },
      { name: "Women Jobs In Delhi", link: "#" },
      { name: "Women Party Place In Delhi", link: "#" },
      { name: "Women Career Coach In Delhi", link: "#" },
      { name: "Women Entrepreneur", link: "#" },
      { name: "Part Time Job For Women In Delhi", link: "#" },
      { name: "Women Coaching Centre In Delhi", link: "#" },
      { name: "Home-Based Job For Women In Delhi", link: "#" },
    ],
    Noida: [{ name: "Coming soon...", link: "#" }],
  };

  return (
    <div className="p-6 font-sans">
      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full border transition ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white inline-flex pt-[29px] pr-[105px] pb-0 pl-[20px] items-start gap-[134px]">
        <div className="grid grid-cols-3 gap-x-10 gap-y-3">
          {data[activeTab].map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="text-gray-800 hover:text-blue-500 cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
