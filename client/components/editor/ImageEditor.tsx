"use client";

type ImageEditorProps = {
  image: string;
};

export default function ImageEditor({
  image,
}: ImageEditorProps) {
  if (!image) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Image Editor
      </h2>

      <div className="flex justify-center">

        <img
          src={image}
          alt="Preview"
          className="max-w-full rounded-xl border"
        />

      </div>

    </div>
  );
}