"use client";

import {
  useRef,
  useState,
  useEffect
} from "react";

import CornerHandle from "./CornerHandle";
import CropOverlay from "./CropOverlay";

import {
  Point,
  Quad
} from "./types";


type PerspectiveCropProps = {
  image:string;
  setCroppedAreaPixels:(value:Quad)=>void;
};


export default function PerspectiveCrop({

image,
setCroppedAreaPixels

}:PerspectiveCropProps){


const containerRef =
useRef<HTMLDivElement>(null);


const imageRef =
useRef<HTMLImageElement>(null);



const [points,setPoints] =
useState<Quad>([
  {
    x:40,
    y:40
  },
  {
    x:460,
    y:40
  },
  {
    x:460,
    y:360
  },
  {
    x:40,
    y:360
  }
]);


const [activePoint,setActivePoint]
=
useState<number|null>(null);



/*
 Convert screen points
 into original image pixels
*/

useEffect(()=>{


const img=imageRef.current;
const box=containerRef.current;


if(!img || !box) return;



const imgRect =
img.getBoundingClientRect();


const boxRect =
box.getBoundingClientRect();



const offsetX =
imgRect.left-boxRect.left;


const offsetY =
imgRect.top-boxRect.top;



const scaleX =
img.naturalWidth/imgRect.width;


const scaleY =
img.naturalHeight/imgRect.height;



const original =
points.map(p=>({

x:(p.x-offsetX)*scaleX,

y:(p.y-offsetY)*scaleY

})) as Quad;



setCroppedAreaPixels(original);



},[points,image]);





const movePoint = (
e:React.PointerEvent
)=>{


if(activePoint===null)
return;


const box =
containerRef.current;


if(!box)
return;



const rect =
box.getBoundingClientRect();



const x =
Math.max(
0,
Math.min(
rect.width,
e.clientX-rect.left
)
);



const y =
Math.max(
0,
Math.min(
rect.height,
e.clientY-rect.top
)
);



setPoints(prev=>{

const copy=[...prev] as Quad;


copy[activePoint]={
x,
y
};


return copy;


});



};



return (

<div

ref={containerRef}

onPointerMove={movePoint}

onPointerUp={()=>{
setActivePoint(null)
}}

onPointerLeave={()=>{
setActivePoint(null)
}}


className="
relative
w-full
h-[550px]
bg-black
rounded-xl
overflow-hidden
select-none
"

>


<img

ref={imageRef}

src={image}

draggable={false}

className="
absolute
inset-0
w-full
h-full
object-fill
pointer-events-none
"

/>



<CropOverlay

cropMode={true}

points={points}

onMoveStart={(index)=>{

setActivePoint(index);

}}

/>


</div>

);


}