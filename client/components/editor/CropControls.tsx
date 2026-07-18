"use client";

type CropControlsProps = {
  cropMode: boolean;
  setCropMode: (value: boolean) => void;
  setCropAspect: (value: number | undefined) => void;
};

export default function CropControls({
  cropMode,
  setCropMode,
  setCropAspect,
}: CropControlsProps) {

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">

      <h3 className="text-xl font-bold text-blue-700 mb-5">
        ✂️ Crop Controls
      </h3>


      <button
        onClick={() => setCropMode(!cropMode)}
        className={`w-full py-3 rounded-lg text-white font-semibold transition ${
          cropMode
            ? "bg-red-600 hover:bg-red-700"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {cropMode ? "Cancel Crop" : "Start Crop"}
      </button>



      <div className="grid grid-cols-2 gap-3 mt-5">


        <button
          disabled={!cropMode}
          onClick={() => setCropAspect(undefined)}
          className="
          bg-blue-600 
          hover:bg-blue-700
          disabled:bg-gray-300 
          text-white 
          py-2 
          rounded-lg
          transition
          "
        >
          Free Crop
        </button>



        <button
          disabled={!cropMode}
          onClick={() => setCropAspect(1)}
          className="
          bg-blue-600 
          hover:bg-blue-700
          disabled:bg-gray-300 
          text-white 
          py-2 
          rounded-lg
          transition
          "
        >
          1 : 1
        </button>



        <button
          disabled={!cropMode}
          onClick={() => setCropAspect(3 / 4)}
          className="
          bg-blue-600 
          hover:bg-blue-700
          disabled:bg-gray-300 
          text-white 
          py-2 
          rounded-lg
          transition
          "
        >
          Aadhaar
        </button>



        <button
          disabled={!cropMode}
          onClick={() => setCropAspect(1.586)}
          className="
          bg-blue-600 
          hover:bg-blue-700
          disabled:bg-gray-300 
          text-white 
          py-2 
          rounded-lg
          transition
          "
        >
          PAN Card
        </button>


      </div>


    </div>
  );
}