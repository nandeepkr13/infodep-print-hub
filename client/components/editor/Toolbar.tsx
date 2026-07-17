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
    <div className="bg-white rounded-xl shadow-md p-6 mt-6 space-y-6">

      <h3 className="text-xl font-bold text-blue-700">
        Image Controls
      </h3>

      {/* Zoom */}
      <div>
        <label className="font-medium">
          Zoom ({zoom.toFixed(1)}x)
        </label>

        <input
          type="range"
          min={1}
          max={3}
          step={0.1}
          value={zoom}
          onChange={(e) => setZoom(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Brightness */}
      <div>
        <label className="font-medium">
          Brightness ({brightness}%)
        </label>

        <input
          type="range"
          min={50}
          max={150}
          value={brightness}
          onChange={(e) => setBrightness(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Contrast */}
      <div>
        <label className="font-medium">
          Contrast ({contrast}%)
        </label>

        <input
          type="range"
          min={50}
          max={150}
          value={contrast}
          onChange={(e) => setContrast(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Saturation */}
      <div>
        <label className="font-medium">
          Saturation ({saturation}%)
        </label>

        <input
          type="range"
          min={0}
          max={200}
          value={saturation}
          onChange={(e) => setSaturation(Number(e.target.value))}
          className="w-full"
        />
      </div>

    </div>
  );
}