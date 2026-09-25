
export default function Loading() {
  return (
    <div className="min-h-screen w-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="relative flex flex-col items-center justify-center">

        {/* Outer Animated Ring */}
        <div className="relative flex h-40 w-40 items-center justify-center">

          <div className="absolute inset-0 rounded-full border-2 border-[#C2F800]/20" />

          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C2F800] border-r-[#C2F800] animate-spin" />

          <div className="absolute inset-4 rounded-full border border-white/20" />

          {/* Center Circle */}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#C2F800] shadow-[0_0_50px_#C2F800] animate-pulse">
            <span className="text-2xl font-black tracking-widest text-black">
              FL
            </span>
          </div>

          {/* Orbit Dot */}
          <div className="absolute inset-[-12px] animate-spin">
            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-[0_0_15px_white]" />
          </div>
        </div>

        {/* Brand */}
        <div className="mt-8 text-center">
          <h1 className="text-4xl font-black tracking-[0.3em] text-white sm:text-5xl">
            FIT<span className="text-[#C2F800]">LOG</span>
          </h1>

          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
            Train • Track • Transform
          </p>
        </div>

        {/* Loading Bar */}
        <div className="mt-8 h-1.5 w-52 overflow-hidden rounded-full bg-white/10 sm:w-64">
          <div className="h-full w-1/2 rounded-full bg-[#C2F800] animate-[pulse_1.2s_ease-in-out_infinite]" />
        </div>

        {/* Loading Text */}
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-[#C2F800]/80 animate-pulse">
          Loading...
        </p>

        {/* Decorative Dots */}
        <div className="mt-7 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#C2F800] animate-pulse [animation-delay:200ms]" />
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse [animation-delay:400ms]" />
        </div>
      </div>
    </div>
  );
}

