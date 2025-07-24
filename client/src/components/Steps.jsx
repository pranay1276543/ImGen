import React from "react";
import { stepsData } from "../assets/assets";
const stepsList = stepsData
const Steps = () => {
  return (
    <div className="mt-20">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10">
        How It Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {stepsList.map((step) => (
          <div
            key={step.id}
            className="bg-white p-6 shadow-lg rounded-lg text-center transform hover:scale-105 transition duration-500"
          >
            <img
              src={step.icon}
              alt={step.title}
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
