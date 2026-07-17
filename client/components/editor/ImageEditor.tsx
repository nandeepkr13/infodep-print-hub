"use client";
import PreviewCanvas from "./PreviewCanvas";
import { useState } from "react";
import Toolbar from "./Toolbar";

type ImageEditorProps = {
  image: string;
};

export default function ImageEditor({ image }: ImageEditorProps) {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);

  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);

  if (!image) return null;

  const resetEditor = () => {
    setZoom(1);
    setRotation(0);
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
    setFlipX(false);
    setFlipY(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mt-10">

      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Image Editor
      </h2>

      {/* Image Preview */}

      <div className="flex justify-center overflow-hidden rounded-xl border bg-gray-100 p-6">
      </div>

      {/* Toolbar */}

      <Toolbar
        zoom={zoom}
        setZoom={setZoom}
        brightness={brightness}
        setBrightness={setBrightness}
        contrast={contrast}
        setContrast={setContrast}
        saturation={saturation}
        setSaturation={setSaturation}
      />

      {/* Buttons */}

      <div className="mt-8 flex flex-wrap justify-center gap-4">

        <button
          onClick={() => setRotation(rotation - 90)}
          className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg"
        >
          ↺ Rotate Left
        </button>

        <button
          onClick={() => setRotation(rotation + 90)}
          className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg"
        >
          ↻ Rotate Right
        </button>

        <button
          onClick={() => setFlipX(!flipX)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg"
        >
          ⇋ Flip Horizontal
        </button>

        <button
          onClick={() => setFlipY(!flipY)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg"
        >
          ⇅ Flip Vertical
        </button>

        <button
          onClick={resetEditor}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
        >
          🔄 Reset
        </button>

      </div>

    </div>
  );
}