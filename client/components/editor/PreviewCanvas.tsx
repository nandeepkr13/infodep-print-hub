"use client";

type PreviewCanvasProps = {
  image: string;
};

export default function PreviewCanvas({
  image,
}: PreviewCanvasProps) {
  if (!image) return null;

  return (
    <div className="flex justify-center items-center bg-gray-100 border rounded-xl p-6 min-h-[500px]">

      <img
        src={image}
        alt="Preview"
        className="max-h-[450px] object-contain rounded-lg shadow-lg"
      />

    </div>
  );
}