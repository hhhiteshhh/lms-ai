import LoadingSpinner from "@/components/shared/LoadingSpinner";

function Loading() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      {/* Loading spinner */}
      <div className="relative z-10">
        <LoadingSpinner text="Loading..." isFullScreen size="lg" />
      </div>
    </div>
  );
}

export default Loading;
