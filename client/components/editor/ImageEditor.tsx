"use client";

import EditorActions from "./EditorActions";
import CropControls from "./CropControls";
import PreviewCanvas from "./PreviewCanvas";
import { useState } from "react";
import Toolbar from "./Toolbar";
import getCroppedImg from "@/utils/cropImage";

type ImageEditorProps = {
  image: string;
};

export default function ImageEditor({ image }: ImageEditorProps) {

  const [zoom, setZoom] = useState(1);
  const [editedImage, setEditedImage] = useState(image);

  const [cropAspect, setCropAspect] =
    useState<number | undefined>(undefined);

  const [croppedAreaPixels, setCroppedAreaPixels] =
    useState<any>(null);

  const [rotation, setRotation] = useState(0);

  const [cropMode, setCropMode] =
    useState(false);

  const [brightness, setBrightness] =
    useState(100);

  const [contrast, setContrast] =
    useState(100);

  const [saturation, setSaturation] =
    useState(100);


  const [flipX, setFlipX] =
    useState(false);

  const [flipY, setFlipY] =
    useState(false);



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



  const applyCrop = async () => {

    try {

      if (!croppedAreaPixels) {

        alert("Please select crop area first");
        return;

      }


      const croppedImage = await getCroppedImg(
        editedImage,
        croppedAreaPixels,
        rotation
      );


      setEditedImage(croppedImage);


      setCropMode(false);


      setZoom(1);
      setRotation(0);


    } catch (error) {

      console.log(error);
      alert("Crop failed");

    }

  };



  return (

    <div className="bg-white rounded-2xl shadow-xl p-8 mt-10">


      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Image Editor
      </h2>



      <div className="grid lg:grid-cols-3 gap-8">



        <div className="lg:col-span-2">


          <PreviewCanvas

            image={editedImage}

            zoom={zoom}

            rotation={rotation}

            brightness={brightness}

            contrast={contrast}

            saturation={saturation}

            flipX={flipX}

            flipY={flipY}

            cropMode={cropMode}

            cropAspect={cropAspect}

            setCroppedAreaPixels={setCroppedAreaPixels} croppedAreaPixels={undefined}
          />


        </div>





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

            setCropMode={setCropMode}

            cropAspect={cropAspect}

            setCropAspect={setCropAspect}

            onApplyCrop={applyCrop}

          />





          <EditorActions

            onRotateLeft={() =>
              setRotation(rotation - 90)
            }

            onRotateRight={() =>
              setRotation(rotation + 90)
            }

            onFlipHorizontal={() =>
              setFlipX(!flipX)
            }

            onFlipVertical={() =>
              setFlipY(!flipY)
            }

            onReset={resetEditor}


            onDownload={() => {

              const link = document.createElement("a");

              link.href = editedImage;

              link.download = "edited-image.jpg";

              document.body.appendChild(link);

              link.click();

              document.body.removeChild(link);

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