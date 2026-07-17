type EditorActionsProps = {
  onRotateLeft: () => void;
  onRotateRight: () => void;
  onFlipHorizontal: () => void;
  onFlipVertical: () => void;
  onReset: () => void;
};

export default function EditorActions({
  onRotateLeft,
  onRotateRight,
  onFlipHorizontal,
  onFlipVertical,
  onReset,
}: EditorActionsProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border p-6 mt-6">

      <h3 className="text-2xl font-bold text-blue-700 mb-6">
        ⚡ Quick Actions
      </h3>

      <div className="space-y-3">

        <button
          onClick={onRotateLeft}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg"
        >
          ↺ Rotate Left
        </button>

        <button
          onClick={onRotateRight}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg"
        >
          ↻ Rotate Right
        </button>

        <button
          onClick={onFlipHorizontal}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg"
        >
          ⇋ Flip Horizontal
        </button>

        <button
          onClick={onFlipVertical}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg"
        >
          ⇅ Flip Vertical
        </button>

        <button
          onClick={onReset}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg"
        >
          🔄 Reset Editor
        </button>

      </div>

    </div>
  );
}