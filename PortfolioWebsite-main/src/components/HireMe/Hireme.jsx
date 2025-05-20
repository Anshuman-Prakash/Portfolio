import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { gsap } from "gsap";
import Headertest from "../Header/Headertest";

export default function Hireme() {
  const formRef = useRef(null);

  useEffect(() => {
    // Animate the form elements when the component mounts
    const ctx = gsap.context(() => {
      gsap.from(".form-element", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
    <Headertest/>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div
            ref={formRef}
            className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8"
        >
            {/* Left Section */}
            <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4 form-element">
                Let’s work together
            </h2>
            <p className="text-gray-600 form-element">
            Feel free to reach out for collaborations or just a friendly chat. I’d love to hear from you!
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4 form-element">
                <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-dribbble"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-behance"></i>
                </a>
            </div>
            </div>

            {/* Right Section */}
            <form className="md:w-1/2 space-y-4">
            <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black form-element"
            />
            <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black form-element"
            />
            <textarea
                placeholder="Type your message here"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black form-element"
            ></textarea>
            <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors form-element"
            >
                Submit
            </button>
            </form>
        </div>
        </div>
    </div>
  );
};
