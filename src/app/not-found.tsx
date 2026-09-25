import React from 'react';
import Link from "next/link";
const Notfoundpage = () => {
    return (

        <div className="min-h-screen bg-black flex items-center justify-center px-4 overflow-hidden">
            <div className="relative w-full max-w-4xl text-center">
                {/* Background Glow */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-[#C2F800]/10 blur-3xl" />
                <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-[#C2F800]/5 blur-3xl" />
                {/* 404 Number */}
                <div className="relative">
                    <h1 className="text-[120px] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C2F800] to-white sm:text-[180px] md:text-[240px]"> 404 </h1>
                    {/* Badge */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <span className="inline-flex backdrop-blur-xl items-center rounded-full border border-transparent  px-5 py-2 text-sm font-semibold text-white"> PAGE NOT FOUND </span>
                    </div>
                </div>
                {/* Content */}
                <div className="relative mt-6">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl"> Oops! You're lost in workout </h2>
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base"> The page you're looking for doesn't exist or may have been moved. Let's get you back to somewhere useful. </p>
                    {/* Button */}
                    <Link href="/" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#C2F800] px-7 py-3.5 font-bold text-black shadow-lg shadow-[#C2F800]/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white hover:shadow-[#C2F800]/30" >
                        <span className="transition-transform duration-300 group-hover:-translate-x-1"> ← </span>
                        Back to Home
                    </Link>
                </div>
                {/* Bottom Decorative Dots */}
                <div className="mt-16 flex justify-center gap-3">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-[#C2F800]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-[#C2F800] [animation-delay:300ms]" />
                </div>
            </div>
        </div>


    );
};

export default Notfoundpage;