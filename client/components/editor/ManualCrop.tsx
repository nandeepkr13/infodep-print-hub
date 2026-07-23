"use client";

import { useEffect, useRef, useState } from "react";

type ManualCropProps = {
  image: string;
  aspect: number | undefined;
  onCropChange: (value: any) => void;
};


type ResizeCorner =
  | "tl"
  | "tr"
  | "bl"
  | "br"
  | null;


export default function ManualCrop({
  image,
  aspect,
  onCropChange,
}: ManualCropProps) {


  const [crop,setCrop]=useState({

    x:80,
    y:80,
    width:250,
    height:250

  });



  const [mode,setMode]=useState<
  "move" | "resize" | null
  >(null);



  const [corner,setCorner]=useState<ResizeCorner>(null);



  const start=useRef({

    x:0,
    y:0

  });



  useEffect(()=>{

    onCropChange(crop);

  },[crop]);





  const startMove=(e:React.MouseEvent)=>{


    setMode("move");


    start.current={

      x:e.clientX,
      y:e.clientY

    };


  };






  const startResize=(
    e:React.MouseEvent,
    position:ResizeCorner
  )=>{


    e.stopPropagation();


    setMode("resize");

    setCorner(position);


    start.current={

      x:e.clientX,
      y:e.clientY

    };


  };






  const handleMove=(e:React.MouseEvent)=>{


    if(!mode) return;



    const dx=e.clientX-start.current.x;
    const dy=e.clientY-start.current.y;



    setCrop(prev=>{


      if(mode==="move"){


        return {

          ...prev,

          x:Math.max(
            0,
            prev.x+dx
          ),

          y:Math.max(
            0,
            prev.y+dy
          )

        };


      }





      let width=prev.width;
      let height=prev.height;
      let x=prev.x;
      let y=prev.y;



      if(corner==="br"){

        width+=dx;
        height+=aspect
        ? dx/aspect
        : dy;

      }



      if(corner==="bl"){

        width-=dx;
        x+=dx;

        height=aspect
        ? width/aspect
        : height-dy;

      }



      if(corner==="tr"){

        width+=dx;
        y+=dy;

        height=aspect
        ? width/aspect
        : height-dy;

      }



      if(corner==="tl"){

        width-=dx;
        height-=dy;

        x+=dx;
        y+=dy;

      }





      return {

        x,
        y,

        width:Math.max(
          60,
          width
        ),

        height:Math.max(
          60,
          height
        )

      };

    });



    start.current={

      x:e.clientX,
      y:e.clientY

    };


  };





  const handleStyle=
  `
  absolute
  w-5
  h-5
  bg-blue-600
  rounded-full
  `;



  return (


<div

className="
relative
w-full
h-[500px]
bg-black
flex
justify-center
items-center
overflow-hidden
select-none
"

onMouseMove={handleMove}

onMouseUp={()=>{

setMode(null);
setCorner(null);

}}

onMouseLeave={()=>{

setMode(null);
setCorner(null);

}}

>



<img

src={image}

className="
max-w-full
max-h-full
object-contain
"

/>




<div

style={{

left:crop.x,
top:crop.y,
width:crop.width,
height:crop.height

}}

onMouseDown={startMove}

className="
absolute
border-2
border-blue-500
bg-blue-400/20
cursor-move
"


>


{/* TOP LEFT */}

<div

onMouseDown={(e)=>
startResize(e,"tl")
}

className={`
${handleStyle}
left-0
top-0
cursor-nw-resize
`}

/>



{/* TOP RIGHT */}

<div

onMouseDown={(e)=>
startResize(e,"tr")
}

className={`
${handleStyle}
right-0
top-0
cursor-ne-resize
`}

/>




{/* BOTTOM LEFT */}

<div

onMouseDown={(e)=>
startResize(e,"bl")
}

className={`
${handleStyle}
left-0
bottom-0
cursor-sw-resize
`}

/>




{/* BOTTOM RIGHT */}

<div

onMouseDown={(e)=>
startResize(e,"br")
}

className={`
${handleStyle}
right-0
bottom-0
cursor-se-resize
`}

/>


</div>



</div>


  );

}