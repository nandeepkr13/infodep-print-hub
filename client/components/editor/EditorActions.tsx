type EditorActionsProps = {
  onRotateLeft: () => void;
  onRotateRight: () => void;
  onFlipHorizontal: () => void;
  onFlipVertical: () => void;
  onReset: () => void;
  onDownload: () => void;
  onPrint: () => void;
};

export default function EditorActions({
  onRotateLeft,
  onRotateRight,
  onFlipHorizontal,
  onFlipVertical,
  onReset,
  onDownload,
  onPrint,
}: EditorActionsProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border p-6 mt-6">

      <h3 className="text-2xl font-bold text-blue-700 mb-6">
        ⚡ Quick Actions
      </h3>

      <div className="space-y-3">

        <button
          onClick={onRotateLeft}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg transition"
        >
          ↺ Rotate Left
        </button>

        <button
          onClick={onRotateRight}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg transition"
        >
          ↻ Rotate Right
        </button>

        <button
          onClick={onFlipHorizontal}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition"
        >
          ⇋ Flip Horizontal
        </button>

        <button
          onClick={onFlipVertical}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition"
        >
          ⇅ Flip Vertical
        </button>

        <button
          onClick={onDownload}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
        >
          ⬇ Download Image
        </button>

        <button
          onClick={onPrint}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition"
        >
          🖨 Print Image
        </button>

        <button
          onClick={onReset}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition"
        >
          🔄 Reset Editor
        </button>

      </div>

    </div>
  );
}