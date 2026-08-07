"use client";

import { Quad } from "./types";
import CornerHandle from "./CornerHandle";


type CropOverlayProps = {
  cropMode: boolean;
  points: Quad;
  onMoveStart:(index:number)=>void;
};


export default function CropOverlay({
  cropMode,
  points,
  onMoveStart,
}: CropOverlayProps) {


  if (!cropMode) return null;


  return (

    <>

      {/* Dark overlay */}

      <svg
        className="
        absolute
        inset-0
        w-full
        h-full
        pointer-events-none
        z-10
        "
      >

        <polygon
          points={
            points
              .map(
                p => `${p.x},${p.y}`
              )
              .join(" ")
          }

          fill="rgba(0,120,255,0.18)"

          stroke="#2563eb"

          strokeWidth="3"
        />

      </svg>



      {/* Corner Handles */}

      {
        points.map((point,index)=>(

          <CornerHandle

            key={index}

            point={point}

            index={index}

            onPointerDown={
              onMoveStart
            }

          />

        ))
      }


    </>

  );
}