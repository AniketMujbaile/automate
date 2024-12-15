import React from "react";
import Sidebar from "./Sidebar.jsx";
import AutomateChat from "./AutomateChat.jsx";
import send from "../assets/send.png";
import download from "../assets/download.png";
import Automate from "../assets/automate-design.png";
import customerRegistration from "../assets/customer-registration.png";
import microphone from "../assets/Microphone.png";
import SearchSend from "../assets/search-send.png";

const steps = [
  {
    id: 1,
    title: "Customer Information Collection",
    description:
      "User enters personal details (eg. name, email, phone number) and submits it.",
  },
  {
    id: 2,
    title: "Customer Information Collection",
    description:
      "User enters personal details (eg. name, email, phone number) and submits it.",
  },
  {
    id: 3,
    title: "Customer Information Collection",
    description:
      "User enters personal details (eg. name, email, phone number) and submits it.",
  },
  {
    id: 4,
    title: "Customer Information Collection",
    description:
      "User enters personal details (eg. name, email, phone number) and submits it.",
  },
  {
    id: 5,
    title: "Customer Information Collection",
    description:
      "User enters personal details (eg. name, email, phone number) and submits it.",
  },
];

const CustomerRegistration = () => {
  return (
    <div className="flex bg-[#1A1A1A] text-white min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Automate Chat */}
      <AutomateChat />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            {/* Left Section: Title & Subtitle */}
            <div className="flex items-center gap-2">
              <img src={Automate} alt="icon" className="w-5 h-5" />
              <p className="text-xl font-bold text-white">Automation Steps</p>
            </div>

            {/* Right Section: Buttons */}
            <div className="flex items-center gap-4">
              {/* Share Button */}
              <button className="flex items-center gap-2 text-gray-100 hover:text-white">
                <img src={send} alt="share" className="w-4 h-4" />
                <span>Share</span>
              </button>

              {/* Download Button */}
              <button className="bg-white text-gray-900 font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                <img src={download} alt="download" className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <img
              src={customerRegistration}
              alt="icon"
              className="w-12 h-12 mt-1"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">
                Customer Registration
              </h1>
              <p className="text-gray-400 mb-4">Automation Steps</p>
            </div>
          </div>

          {/* Steps */}
          <div className="relative space-y-10">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex items-center gap-6">
                {/* Vertical Line */}
                {index !== steps.length - 1 && (
                  <div
                    className="absolute left-5 top-14 w-1 h-full bg-gradient-to-b"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, ${
                        step.id === 1
                          ? "#3b82f6, #ec4899"
                          : step.id === 2
                          ? "#ec4899, #f97316"
                          : step.id === 3
                          ? "#f97316, #a855f7"
                          : step.id === 4
                          ? "#a855f7, #38bdf8"
                          : "#38bdf8, #3b82f6"
                      })`,
                    }}
                  ></div>
                )}

                {/* Step Number with Gradient Border */}
                <div
                  className="relative flex items-center justify-center h-12 w-12 text-lg font-semibold rounded-full text-white bg-[#1A1A1A]"
                  style={{
                    border: `0.5px solid transparent`,
                    backgroundClip: "padding-box",
                    boxShadow: `0 0 8px ${
                      step.id === 1
                        ? "#3b82f6"
                        : step.id === 2
                        ? "#ec4899"
                        : step.id === 3
                        ? "#f97316"
                        : step.id === 4
                        ? "#a855f7"
                        : "#38bdf8"
                    }`,
                    backgroundImage: `linear-gradient(#1A1A1A, #1A1A1A), linear-gradient(to bottom, ${
                      step.id === 1
                        ? "#3b82f6, #ec4899"
                        : step.id === 2
                        ? "#ec4899, #f97316"
                        : step.id === 3
                        ? "#f97316, #a855f7"
                        : step.id === 4
                        ? "#a855f7, #38bdf8"
                        : "#38bdf8, #3b82f6"
                    })`,
                    backgroundOrigin: "border-box",
                  }}
                >
                  {step.id}
                </div>

                {/* Step Details */}
                <div className="flex-1 bg-gray-800 p-4 rounded-xl shadow-lg flex justify-between items-center">
                  <div>
                    <h2 className="text-sm font-semibold text-white">
                      {step.title}
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">
                      {step.description}
                    </p>
                  </div>
                  <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full text-sm text-white">
                    Assist
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="mt-10 relative">
            <input
              type="text"
              placeholder="Search here to customize your discovery process..."
              className="w-full px-4 py-3 rounded-full bg-gray-800 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500 pr-16" // pr-16 for space on the right side
            />
            {/* Icons Container */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-3">
              <img
                src={microphone}
                alt="microphone"
                className="w-4 h-5 cursor-pointer"
              />
              <img
                src={SearchSend}
                alt="send"
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegistration;


 