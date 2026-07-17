"use client";

import { useRef, useState } from "react";

type UploadCardProps = {
  onImageSelect: (image: string) => void;
};

export default function UploadCard({
  onImageSelect,
}: UploadCardProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");

  // ==========================
  // Process Selected File
  // ==========================
  const processFile = (file: File) => {
    setError("");

    // Maximum 10 MB
    if (file.size > 10 * 1024 * 1024) {
      setError("File size should be less than 10 MB.");
      return;
    }

    // Supported Files
    const allowed = [
      "image/png",
      "image/jpeg",
      "application/pdf",
    ];

    if (!allowed.includes(file.type)) {
      setError("Only PNG, JPG, JPEG and PDF files are allowed.");
      return;
    }

    setFileName(file.name);

    if (file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);

      setPreview(imageUrl);

      // Send image to Hero Component
      onImageSelect(imageUrl);
    } else {
      setPreview("");

      // PDF upload
      onImageSelect("");
    }
  };

  // ==========================
  // Browse File
  // ==========================
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      processFile(file);
    }
  };

  // ==========================
  // Drag & Drop
  // ==========================
  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];

    if (file) {
      processFile(file);
    }
  };

  // ==========================
  // Remove File
  // ==========================
  const removeFile = () => {
    setFileName("");
    setPreview("");
    setError("");

    onImageSelect("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm border">

      <h2 className="text-2xl font-bold text-center text-blue-700 mb-5">
        Upload Document
      </h2>

      <div
        className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 ${
          isDragging
            ? "border-blue-600 bg-blue-50"
            : "border-blue-300 bg-white"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >

        {/* Image Preview */}

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-60 h-40 object-contain mx-auto rounded-lg border mb-4"
          />
        )}

        <p className="text-gray-600 font-medium">
          {isDragging
            ? "📂 Drop your file here"
            : "Drag & Drop File Here"}
        </p>

        <p className="my-3 text-gray-400">OR</p>

        <button
          onClick={() => inputRef.current?.click()}
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition"
        >
          Browse File
        </button>

        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept=".png,.jpg,.jpeg,.pdf"
          onChange={handleFileChange}
        />

        {/* Error */}

        {error && (
          <p className="mt-4 text-red-600 font-medium">
            {error}
          </p>
        )}

        {/* File Name */}

        {fileName && (
          <p className="mt-4 text-green-600 font-semibold break-all">
            {fileName}
          </p>
        )}

        {/* Success */}

        {fileName && (
          <p className="mt-2 text-green-600">
            ✅ File Uploaded Successfully
          </p>
        )}

        {/* Buttons */}

        {fileName && (
          <div className="flex justify-center gap-3 mt-5">

            <button
              onClick={() => inputRef.current?.click()}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
            >
              Change File
            </button>

            <button
              onClick={removeFile}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
            >
              Remove
            </button>

          </div>
        )}

        <p className="mt-5 text-sm text-gray-500">
          PNG • JPG • JPEG • PDF
        </p>

        <p className="text-xs text-gray-400 mt-2">
          Maximum Size: 10 MB
        </p>

      </div>

    </div>
  );
}