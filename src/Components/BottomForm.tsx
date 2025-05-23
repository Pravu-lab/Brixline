"use client";
import { useThankYou } from "@/contexts/ThankYouContext";
import React, { useState } from "react";
import { LoadingAnimation } from "./loader/LoadingAnimation";

interface BottomFormProps {
  classname?: string;
}

const BottomForm: React.FC<BottomFormProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showThankYouWithTimeout } = useThankYou();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    location: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, contact, email, location } = formData;
    if (!name.trim() || !contact.trim() || !email.trim() || !location.trim()) {
      alert("Please fill out all the fields.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      setFormData({ name: "", contact: "", email: "", location: "" });
      showThankYouWithTimeout();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove all non-digit characters
    const numericValue = e.target.value.replace(/\D/g, "");
    setFormData({ ...formData, contact: numericValue });
  };

  return (
    <div className="bg-black">
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-16">
        <div className="">
          <h3 className="text-center text-[28px] md:text-5xl font-light text-white mt-2">
            Talk to our Expert
          </h3>
          <form
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[769px] mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              required
              placeholder="First Name"
              aria-label="First Name"
              className="w-full p-4 border border-[#DADBE4] outline-none focus:ring-2 focus:ring-[#A9ADB7] bg-white text-black"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="tel"
              required
              placeholder="Contact Number"
              aria-label="Contact Number"
              className="w-full p-4 border border-[#DADBE4] outline-none focus:ring-2 focus:ring-[#A9ADB7] bg-white text-black"
              value={formData.contact}
              // onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              onChange={handleContactChange}
            />
            <input
              type="email"
              required
              placeholder="Email Address"
              aria-label="Email Address"
              className="w-full p-4 border border-[#DADBE4] outline-none focus:ring-2 focus:ring-[#A9ADB7] bg-white text-black"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="text"
              required
              placeholder="Location of Plot"
              aria-label="Location of Plot"
              className="w-full p-4 border border-[#DADBE4] outline-none focus:ring-2 focus:ring-[#A9ADB7] bg-white text-black"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />

            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"

                onSubmit={handleSubmit}
                disabled={isLoading}
                className="w-full max-w-sm bg-[#F55252] text-sm text-white py-4 font-bold transition flex justify-center items-center gap-2.5 "
                onClick={handleSubmit}
              >
                {isLoading  ? ( 
                  <LoadingAnimation/>
                )
                 : 
                 "GET A FREE QUOTE" }
              </button>
            </div>
          </form>

          <p className="w-full max-w-sm mx-auto text-center font-normal text-xs text-white mt-3">
            By proceeding, you are indicating that you have read and agree to
            our
            <a href="#" className="font-normal underline">
              {" "}
              terms of use{" "}
            </a>
            &amp;
            <a href="#" className="font-normal underline">
              {" "}
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomForm;
