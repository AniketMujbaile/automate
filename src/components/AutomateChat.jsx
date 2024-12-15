import React from "react";
import Comments from "../assets/Comments.png";
import GlobeHemisphere from "../assets/Globe-hemisphere.png";
import MaterialSymbols from "../assets/material-symbols.png";
import add from "../assets/add.png";
import searchIcon from "../assets/search.png"; 

const AutomateChat = () => {
  return (
    <div className="bg-[#1A1A1A] w-72 bg-[#1A1A1A] shadow-lg border-r border-[#4B4B4B]">
      {/* Automate Chat Header */}
      <div className="p-4">
        <h2 className="text-lg font-semibold">Automate Chat</h2>
      </div>

      {/* Search Bar */}
      <div className="p-3">
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <img
              src={searchIcon}
              alt="Search"
              className="w-4 h-4 text-gray-400"
            />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent border rounded-full pl-10 pr-3 py-2 text-white focus:outline-none"
          />
        </div>
      </div>

      {/* Recent Section */}
      <div className="p-3">
        <h3 className="text-sm font-medium mb-2 text-gray-400">Recent</h3>
        <ul className="space-y-2">
          <li className="flex items-center p-2 rounded-md cursor-pointer hover:bg-[#5C5C5C]">
            <span className="mr-2">
              <img src={Comments} alt="Comments" className="w-5 h-5" />
            </span>
            Customer Service Automation
          </li>
          <li className="flex items-center p-2 rounded-md cursor-pointer hover:bg-[#5C5C5C]">
            <span className="mr-2">
              <img
                src={GlobeHemisphere}
                alt="GlobeHemisphere"
                className="w-5 h-5"
              />
            </span>
            Inventory Management
          </li>
          <li className="flex items-center p-2 rounded-md cursor-pointer hover:bg-[#5C5C5C]">
            <span className="mr-2">
              <img
                src={MaterialSymbols}
                alt="MaterialSymbols"
                className="w-5 h-5"
              />
            </span>
            Market Dynamics
          </li>
        </ul>
      </div>

      {/* Last 30 Days Section */}
      <div className="p-3">
        <h3 className="text-sm font-medium mb-2 text-gray-400">Last 30 Days</h3>
        <ul className="space-y-2">
          <li className="flex items-center p-2 rounded-md cursor-pointer hover:bg-[#5C5C5C]">
            <span className="mr-2">
              <img src={Comments} alt="Comments" className="w-5 h-5" />
            </span>
            Customer Service Automation
          </li>
          <li className="flex items-center p-2 rounded-md cursor-pointer hover:bg-[#5C5C5C]">
            <span className="mr-2">
              <img
                src={GlobeHemisphere}
                alt="GlobeHemisphere"
                className="w-5 h-5"
              />
            </span>
            Inventory Management
          </li>
          <li className="flex items-center p-2 rounded-md cursor-pointer hover:bg-[#5C5C5C]">
            <span className="mr-2">
              <img
                src={MaterialSymbols}
                alt="MaterialSymbols"
                className="w-5 h-5"
              />
            </span>
            Market Dynamics
          </li>
        </ul>
      </div>

      {/* New Chat Button */}
      <div className="p-3 mt-32">
        <button className="w-full flex items-center justify-center border py-2 rounded-full hover:bg-[#5C5C5C]">
          <span className="mr-2">
            <img src={add} alt="New Chat Icon" className="w-5 h-5" />
          </span>
          New Chat
        </button>
      </div>
    </div>
  );
};

export default AutomateChat;


 