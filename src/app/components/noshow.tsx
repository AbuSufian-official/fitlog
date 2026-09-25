import React from 'react';
import Link from "next/link";
const Noshow = () => {
    return (
        <>
            <div className="mt-5 flex min-h-[250px] flex-col items-center justify-center rounded-xl border border-dashed border-[#252a33] bg-[#0d0f13] px-5 text-center sm:min-h-[300px]">

                <h2 className="text-base font-black uppercase tracking-wide text-white sm:text-lg">
                    Nothing Here Yet
                </h2>

                <p className="mt-2 text-[10px] text-[#858b97] sm:text-xs">
                    Browse the library and add a lift to get moving.
                </p>


                {/* Go to workouts */}
                <Link
                    href="http://localhost:3000"
                    className="mt-5 rounded-full bg-[#c8ff00] px-5 py-2.5 text-[10px] font-bold text-black shadow-[0_8px_25px_rgba(200,255,0,0.12)] transition-all duration-300 hover:scale-105 hover:bg-[#d6ff3d] hover:shadow-[0_8px_30px_rgba(200,255,0,0.25)] active:scale-95"
                >
                    Go to workouts
                </Link></div>
        </>
    );
};

export default Noshow;