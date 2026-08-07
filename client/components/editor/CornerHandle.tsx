"use client";

import { Point } from "./types";

type CornerHandleProps = {
  point: Point;
  index: number;
  onPointerDown: (
    index: number,
    e: React.PointerEvent<HTMLDivElement>
  ) => void;
};

export default function CornerHandle({
  point,
  index,
  onPointerDown,
}: CornerHandleProps) {

  return (
    <div
      onPointerDown={(e) => {
        e.preventDefault();
        e.stopPropagation();

        onPointerDown(index, e);
      }}

      style={{
        left: point.x - 12,
        top: point.y - 12,
        touchAction: "none",
      }}

      className="
        absolute
        w-6
        h-6
        rounded-full
        bg-white
        border-4
        border-blue-600
        shadow-xl
        cursor-grab
        active:cursor-grabbing
        hover:scale-110
        transition-transform
        z-30
      "
    />

  );
}