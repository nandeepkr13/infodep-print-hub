"use client";

import { useRef, useState, useEffect } from "react";


type Point={
 x:number;
 y:number;
};


type PerspectiveCropProps={
 image:string;
 setCroppedAreaPixels:(value:any)=>void;
};



export default function PerspectiveCrop({

image,
setCroppedAreaPixels

}:PerspectiveCropProps){


const containerRef=useRef<HTMLDivElement>(null);

const imageRef=useRef<HTMLImageElement>(null);



const [points,setPoints]=useState<Point[]>([

{x:80,y:80},
{x:520,y:80},
{x:520,y:400},
{x:80,y:400}

]);



const [activePoint,setActivePoint]
=
useState<number|null>(null);





useEffect(()=>{


const img=imageRef.current;


const container=containerRef.current;


if(!img || !container) return;



const imgRect=
img.getBoundingClientRect();



const containerRect=
container.getBoundingClientRect();





const offsetX=
imgRect.left-containerRect.left;


const offsetY=
imgRect.top-containerRect.top;





const scaleX=
img.naturalWidth/imgRect.width;


const scaleY=
img.naturalHeight/imgRect.height;





const originalPoints=
points.map(p=>({


x:(p.x-offsetX)*scaleX,

y:(p.y-offsetY)*scaleY


}));



setCroppedAreaPixels(originalPoints);



},[points,image]);







const handleMove=(e:React.MouseEvent)=>{


if(activePoint===null) return;


const container=
containerRef.current;


if(!container) return;



const rect=
container.getBoundingClientRect();



const x=Math.max(

0,

Math.min(

rect.width,

e.clientX-rect.left

)

);



const y=Math.max(

0,

Math.min(

rect.height,

e.clientY-rect.top

)

);




setPoints(prev=>{


const copy=[...prev];


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

onMouseMove={handleMove}

onMouseUp={()=>setActivePoint(null)}

onMouseLeave={()=>setActivePoint(null)}

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
object-contain
pointer-events-none
"

/>





<svg

className="
absolute
inset-0
w-full
h-full
pointer-events-none
"

>


<polygon

points={
points.map(p=>`${p.x},${p.y}`).join(" ")
}

fill="rgba(0,120,255,.15)"

stroke="#2196f3"

strokeWidth="3"

/>


</svg>






{
points.map((p,i)=>(


<div

key={i}

onMouseDown={(e)=>{

e.preventDefault();

setActivePoint(i);

}}


style={{

left:p.x-10,

top:p.y-10

}}



className="
absolute
w-6
h-6
rounded-full
bg-white
border-4
border-blue-600
cursor-grab
shadow-lg
"

/>


))
}





</div>

);


}