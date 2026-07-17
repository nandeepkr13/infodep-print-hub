"use client";

import { useState } from "react";

import UploadCard from "./UploadCard";
import ImageEditor from "../editor/ImageEditor";

export default function Hero() {

  // Selected Image
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Hero Section */}

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
              Welcome to Infodep Print Hub
            </span>

            <h1 className="mt-8 text-5xl font-extrabold text-gray-900 leading-tight">
              Professional Printing Solution 🚀
            </h1>

            <p className="mt-6 text-xl text-gray-600">
              Print Aadhaar Card, PAN Card, Voter ID, PVC Card,
              Passport Photo and other documents with professional quality.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl">
                Upload Image
              </button>

              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl">
                Upload PDF
              </button>

              <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-3 rounded-xl">
                Get Started
              </button>

            </div>

          </div>

          {/* Right Side */}

          <UploadCard
            onImageSelect={setSelectedImage}
          />

        </div>

        {/* Image Editor */}

        {selectedImage && (

          <div className="mt-16">

            <ImageEditor
              image={selectedImage}
            />

          </div>

        )}

      </div>

    </section>
  );
}