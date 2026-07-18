"use client";

import Cropper from "react-easy-crop";
import { useState } from "react";

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
  cropAspect: number | undefined;
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
  cropAspect,
}: PreviewCanvasProps) {


  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  });


  const [cropZoom, setCropZoom] = useState(1);


  const [croppedAreaPixels, setCroppedAreaPixels] =
    useState<any>(null);



  const onCropComplete = (
    _: any,
    croppedPixels: any
  ) => {
    setCroppedAreaPixels(croppedPixels);
  };



  if (!image) return null;



  return (

    <div
      className="
      relative
      flex
      justify-center
      items-center
      bg-gray-100
      border
      rounded-xl
      p-6
      min-h-[550px]
      overflow-hidden
      "
    >


      {cropMode ? (


        <Cropper

          image={image}

          crop={crop}

          zoom={cropZoom}

          rotation={rotation}

          aspect={cropAspect}


          onCropChange={setCrop}

          onZoomChange={setCropZoom}


          onCropComplete={onCropComplete}


          objectFit="contain"


          style={{
            containerStyle:{
              width:"100%",
              height:"100%",
              background:"#eee"
            }
          }}

        />


      ) : (


        <img

          src={image}

          alt="Preview"


          style={{

            transform:`
              scale(${zoom})
              rotate(${rotation}deg)
              scaleX(${flipX ? -1 : 1})
              scaleY(${flipY ? -1 : 1})
            `,


            filter:`
              brightness(${brightness}%)
              contrast(${contrast}%)
              saturate(${saturation}%)
            `,


            transition:"all .3s ease"

          }}


          className="
          max-w-full
          max-h-[500px]
          object-contain
          rounded-lg
          shadow-lg
          "

        />


      )}


    </div>

  );
}