'use client'
// components/Tabs.js
import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  // Content for each tab
  const renderContent = () => {
    switch (activeTab) {
      case "Tab1":
        return <div>Content for Tab 1</div>;
      case "Tab2":
        return <div>Content for Tab 2</div>;
      case "Tab3":
        return <div>Content for Tab 3</div>;
      default:
        return <div>Select a Tab</div>;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {/* Tab Buttons */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("Tab1")}
          className={`px-4 py-2 ${
            activeTab === "Tab1" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
          }`}
        >
          Tab 1
        </button>
        <button
          onClick={() => setActiveTab("Tab2")}
          className={`px-4 py-2 ${
            activeTab === "Tab2" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
          }`}
        >
          Tab 2
        </button>
        <button
          onClick={() => setActiveTab("Tab3")}
          className={`px-4 py-2 ${
            activeTab === "Tab3" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
          }`}
        >
          Tab 3
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
