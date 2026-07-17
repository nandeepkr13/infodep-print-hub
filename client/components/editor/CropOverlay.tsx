type CropOverlayProps = {
  cropMode: boolean;
};

export default function CropOverlay({
  cropMode,
}: CropOverlayProps) {
  if (!cropMode) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

      <div className="w-64 h-64 border-2 border-dashed border-blue-600 bg-blue-200/20 rounded-lg" />

    </div>
  );
}