type ToolbarProps = {
  zoom: number;
  setZoom: (value: number) => void;

  brightness: number;
  setBrightness: (value: number) => void;

  contrast: number;
  setContrast: (value: number) => void;

  saturation: number;
  setSaturation: (value: number) => void;
};

export default function Toolbar({
  zoom,
  setZoom,
  brightness,
  setBrightness,
  contrast,
  setContrast,
  saturation,
  setSaturation,
}: ToolbarProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border p-6">

      <h3 className="text-2xl font-bold text-blue-700 mb-6">
        🎛 Image Controls
      </h3>

      {/* Zoom */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label className="font-semibold">Zoom</label>
          <span className="text-blue-600 font-medium">
            {zoom.toFixed(1)}x
          </span>
        </div>

        <input
          type="range"
          min={1}
          max={3}
          step={0.1}
          value={zoom}
          onChange={(e) => setZoom(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      {/* Brightness */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label className="font-semibold">Brightness</label>
          <span className="text-blue-600 font-medium">
            {brightness}%
          </span>
        </div>

        <input
          type="range"
          min={50}
          max={150}
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      {/* Contrast */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label className="font-semibold">Contrast</label>
          <span className="text-blue-600 font-medium">
            {contrast}%
          </span>
        </div>

        <input
          type="range"
          min={50}
          max={150}
          value={contrast}
          onChange={(e) => setContrast(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      {/* Saturation */}
      <div>
        <div className="flex justify-between mb-2">
          <label className="font-semibold">Saturation</label>
          <span className="text-blue-600 font-medium">
            {saturation}%
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={200}
          value={saturation}
          onChange={(e) => setSaturation(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

    </div>
  );
}