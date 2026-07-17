type CropControlsProps = {
  cropMode: boolean;
  setCropMode: (value: boolean) => void;
};

export default function CropControls({
  cropMode,
  setCropMode,
}: CropControlsProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">

      <h3 className="text-lg font-bold text-blue-700 mb-4">
        Crop Tool
      </h3>

      <button
        onClick={() => setCropMode(!cropMode)}
        className={`w-full py-3 rounded-lg text-white font-semibold ${
          cropMode
            ? "bg-red-600 hover:bg-red-700"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {cropMode ? "Cancel Crop" : "Start Crop"}
      </button>

    </div>
  );
}