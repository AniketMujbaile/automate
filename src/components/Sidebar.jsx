import React from 'react'

import logo from "../assets/logo.png";
import dashboardIcon from "../assets/dashboard.png";
import playgroundIcon from "../assets/playground.png";
import ingestIcon from "../assets/ingest.png";
import automationsIcon from "../assets/automations.png";
import activeAutomationsIcon from "../assets/active-automations.png";
import integrationsIcon from "../assets/integrations.png";
import messagesIcon from "../assets/messages.png";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <img src={dashboardIcon} alt="Dashboard" className="w-5 h-5" />,
      text: "Dashboard",
    },
    {
      icon: <img src={playgroundIcon} alt="Playground" className="w-5 h-5" />,
      text: "Playground",
     },
    {
      icon: <img src={ingestIcon} alt="Ingest" className="w-5 h-5" />,
      text: "Ingest",
    },
    {
      icon: <img src={automationsIcon} alt="Automations" className="w-5 h-5" />,
      text: "Automations",
    },
    {
      icon: (
        <img
          src={activeAutomationsIcon}
          alt="Active Automations"
          className="w-5 h-5"
        />
      ),
      text: "Active Automations",
    },
    {
      icon: (
        <img src={integrationsIcon} alt="Integrations" className="w-5 h-5" />
      ),
      text: "Integrations",
    },
    {
      icon: <img src={messagesIcon} alt="Messages" className="w-5 h-5" />,
      text: "Messages",
    },
  ];
   return (
    <div className="flex bg-[#1A1A1A] text-white border-r border-[#4B4B4B]">
    {/* Sidebar */}
    <div className="w-64 shadow-lg">
      <div>
        <div className="flex items-center justify-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="p-3 w-[79.99px] h-[69.71px]"
          />
        </div>
      </div>

      <div className="p-4">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 p-2 rounded-lg mb-2 ${
              item.active
                ? "bg-[#4B4B4B] text-[#00FF00]"
                : "hover:bg-[#2B2B2B]"
            }`}
          >
            {item.icon}
            <span className="tet-[#FFFFFF99]">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute bottom-4 left-4">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        <div>
          <div className="text-sm text-[#FFFFFF] font-medium">Alex Johns</div>
          <div className="text-xs text-gray-500">alexjohns@gmail.com</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar