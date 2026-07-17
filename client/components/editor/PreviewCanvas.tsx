"use client";
import Cropper from "react-easy-crop";
import { useState } from "react";
import CropOverlay from "./CropOverlay";
type PreviewCanvasProps = {
  image: string;
  zoom: number;
  rotation: number;
  brightness: number;
  contrast: number;
  saturation: number;
  flipX: boolean;
  flipY: boolean;
  cropMode: boolean;
};

export default function PreviewCanvas({
  image,
  zoom,
  rotation,
  brightness,
  contrast,
  saturation,
  flipX,
  flipY,
  cropMode,
}: PreviewCanvasProps) {
  if (!image) return null;
  const [crop, setCrop] = useState({ x: 0, y: 0 });

const [cropZoom, setCropZoom] = useState(1);
const [cropRotation, setCropRotation] = useState(0);

  return (
<div className="relative flex justify-center items-center bg-gray-100 border rounded-xl p-6 min-h-[550px] overflow-hidden">
      <img
        src={image}
        alt="Preview"
        style={{
          transform: `
            scale(${zoom})
            rotate(${rotation}deg)
            scaleX(${flipX ? -1 : 1})
            scaleY(${flipY ? -1 : 1})
          `,
          filter: `
            brightness(${brightness}%)
            contrast(${contrast}%)
            saturate(${saturation}%)
          `,
          transition: "all 0.3s ease",
        }}
        className="max-w-full max-h-[500px] object-contain rounded-lg shadow-lg"
      />
<CropOverlay cropMode={cropMode} />
    </div>
  );
}