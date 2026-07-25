"use client";

type CropControlsProps = {
  cropMode: boolean;
  setCropMode: (value: boolean) => void;
  cropAspect: number | undefined;
  setCropAspect: (value: number | undefined) => void;
  onApplyCrop: () => void;
};

export default function CropControls({
  cropMode,
  setCropMode,
  cropAspect,
  setCropAspect,
  onApplyCrop,
}: CropControlsProps) {
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">

      <h3 className="text-xl font-bold text-blue-700 mb-5">
        ✂️ Crop Controls
      </h3>


      {/* Start Crop Button */}
      <button
        onClick={() => setCropMode(!cropMode)}
        className={`w-full py-3 rounded-lg text-white font-semibold transition ${
          cropMode
            ? "bg-red-600 hover:bg-red-700"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {cropMode ? "❌ Cancel Crop" : "✂️ Start Crop"}
      </button>



      {/* Aspect Ratio Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-5">


        <button
          disabled={!cropMode}
          onClick={() => setCropAspect(undefined)}
          className={`py-2 rounded-lg text-white font-semibold transition disabled:bg-gray-300 ${
            cropAspect === undefined
              ? "bg-green-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Free Crop
        </button>



        <button
          disabled={!cropMode}
          onClick={() => setCropAspect(1)}
          className={`py-2 rounded-lg text-white font-semibold transition disabled:bg-gray-300 ${
            cropAspect === 1
              ? "bg-green-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          1 : 1
        </button>



        <button
          disabled={!cropMode}
          onClick={() => setCropAspect(3 / 4)}
          className={`py-2 rounded-lg text-white font-semibold transition disabled:bg-gray-300 ${
            cropAspect === 3 / 4
              ? "bg-green-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Aadhaar
        </button>



        <button
          disabled={!cropMode}
          onClick={() => setCropAspect(1.586)}
          className={`py-2 rounded-lg text-white font-semibold transition disabled:bg-gray-300 ${
            cropAspect === 1.586
              ? "bg-green-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          PAN Card
        </button>


      </div>



      {/* Apply Crop */}
      <button
  onClick={() => {

    console.log("Apply Crop Clicked");

    onApplyCrop();

  }}

  className="
  mt-5
  w-full
  bg-orange-500
  hover:bg-orange-600
  active:scale-95
  text-white
  py-3
  rounded-lg
  font-semibold
  transition
  cursor-pointer
  "
>
  ✅ Apply Crop
</button>

    </div>
  );
}