// src/components/Tabs.js
import React, { useState } from "react";

const Tab = ({ label, isSelected, onClick }) => {
  return (
    <div
      className={`cursor-pointer text-base lg:text-2xl ${
        isSelected ? " border-b-2 border-blue-500" : ""
      } pb-4`}
      style={{ borderColor: "#E73C17" }}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

const TabContent = ({ tabNumber }) => {
  // Content for each tab
  const tabContents = {
    1: (
      <div className="flex justify-center">
        <span className="w-full md:w-2/3 lg:w-7/12 text-zinc-900 text-sm lg:text-lg font-extralight leading-loose">
          The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED
          TV we&apos;ve tested. Although all OLEDs deliver similar fantastic
          picture quality, this one stands out for its value because it has many
          gaming-oriented features that are great for gamers.
          <br />
          <br />
          *Only 65G2 is shown in the image for example purposes. All 2022 LG
          OLED models feature eco-friendly packaging.
          <br />
          **65C2 Stand model is at a minimum 39% lighter than the C1 series.
          <br />
          ***The &apos;Reducing CO2&apos; footprint label applies to 65C2 only.
          All other C2 models feature a &apos;CO2 Measured&apos; label.
          <br />
          ****UL ECV certification based on TV frame and back cover. Percentage
          of recycled content varies by model and size.
        </span>
      </div>
    ),
  };

  return <div className="p-4">{tabContents[tabNumber]}</div>;
};

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  return (
    <div className="w-full mt-20">
      <div className="flex border-b justify-center border-neutral-200 mb-4 gap-6 md:gap-20 lg:gap-36">
        <Tab
          label="Description"
          isSelected={selectedTab === 1}
          onClick={() => handleTabClick(1)}
        />
        <Tab
          label="Specification"
          isSelected={selectedTab === 2}
          onClick={() => handleTabClick(2)}
        />
        <Tab
          label="Reviews"
          isSelected={selectedTab === 3}
          onClick={() => handleTabClick(3)}
        />
      </div>

      {/* Used only the first content temporarily */}
      <TabContent tabNumber={1} />
    </div>
  );
};

export default Tabs;
