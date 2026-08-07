"use client";

import { Point } from "./types";

type CornerHandleProps = {
  point: Point;
  index: number;
  onMouseDown: (index: number) => void;
};

export default function CornerHandle({
  point,
  index,
  onMouseDown,
}: CornerHandleProps) {
  return (
    <div
      onMouseDown={(e) => {
        e.preventDefault();
        onMouseDown(index);
      }}
      style={{
        left: point.x - 10,
        top: point.y - 10,
      }}
      className="
        absolute
        w-5
        h-5
        rounded-full
        bg-white
        border-4
        border-blue-600
        shadow-lg
        cursor-grab
        active:cursor-grabbing
        hover:scale-110
        transition
      "
    />
  );
}