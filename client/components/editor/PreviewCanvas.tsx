"use client";

import PerspectiveCrop from "./PerspectiveCrop";


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

  cropAspect:number | undefined;

  setCroppedAreaPixels:(value:any)=>void;
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
setCroppedAreaPixels,

}:PreviewCanvasProps){


if(!image) return null;



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

<PerspectiveCrop

image={image}

setCroppedAreaPixels={
setCroppedAreaPixels
}

/>


)

:(


<img

src={image}

alt="Preview"


style={{

transform:`

scale(${zoom})
rotate(${rotation}deg)
scaleX(${flipX ? -1:1})
scaleY(${flipY ? -1:1})

`,


filter:`

brightness(${brightness}%)
contrast(${contrast}%)
saturate(${saturation}%)

`,

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