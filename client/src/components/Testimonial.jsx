import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const testimonials = [
    {
      id: 1,
      name: "Sarah Collins",
      title: "UI Designer",
      feedback:
        "Imagify has revolutionized the way I generate concept art. The results are stunning and save me so much time.",
      image: assets.profile_img_1,
    },
    {
      id: 2,
      name: "Daniel White",
      title: "Ad Creator",
      feedback:
        "The AI image generation is next level! I use it regularly for social media ad mockups and product visuals.",
      image: assets.profile_img_2,
    },
    {
      id: 3,
      name: "Priya Mehta",
      title: "Content Strategist",
      feedback:
        "I love using Imagify for blog visuals! It's fast, creative, and incredibly easy to use.",
      image: assets.profile_icon,
    },
  ];

const Testimonial = () => {
  return (
    <div className="mt-24 px-4 sm:px-10">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12">
        What People Are Saying
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
