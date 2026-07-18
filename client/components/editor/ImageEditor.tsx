"use client";
import EditorActions from "./EditorActions";
import CropControls from "./CropControls";
import PreviewCanvas from "./PreviewCanvas";
import { useState } from "react";
import Toolbar from "./Toolbar";

type ImageEditorProps = {
  image: string;
};

export default function ImageEditor({ image }: ImageEditorProps) {
  const [zoom, setZoom] = useState(1);
  const [editedImage, setEditedImage] = useState(image);
  const [cropAspect, setCropAspect] = useState<number | undefined>(undefined);
  const [rotation, setRotation] = useState(0);
  const [cropMode, setCropMode] = useState(false);  
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

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Left Side - Image Preview */}

      <div className="lg:col-span-2">

        <PreviewCanvas
  image={image}
  zoom={zoom}
  rotation={rotation}
  brightness={brightness}
  contrast={contrast}
  saturation={saturation}
  flipX={flipX}
  flipY={flipY}
  cropMode={cropMode}
  cropAspect={cropAspect}
/>

      </div>

      {/* Right Side */}

      <div>

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
        <CropControls
            cropMode={cropMode}
            setCropMode={setCropMode} setCropAspect={function (value: number | undefined): void {
              throw new Error("Function not implemented.");
            } }/>

<EditorActions
  onRotateLeft={() => setRotation(rotation - 90)}
  onRotateRight={() => setRotation(rotation + 90)}
  onFlipHorizontal={() => setFlipX(!flipX)}
  onFlipVertical={() => setFlipY(!flipY)}
  onReset={resetEditor}
  onDownload={() => {
    alert("Download feature coming in next step.");
  }}
  onPrint={() => {
    alert("Print feature coming in next step.");
  }}
/>

      </div>

    </div>

  </div>
);
}