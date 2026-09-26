"use client"
import React, { useContext } from 'react';
import { userContext } from '../context/context';
import Image from "next/image";
import Link from 'next/link';
import { toast, Bounce } from 'react-toastify';
import type { Workout } from '../types';
import type { ContextValue } from '../types';

interface SaveplancardProps {
    infor: Workout;
}

const Saveplancard = ({ infor }: SaveplancardProps) => {
    const { savePlan, setsaveplan } = useContext(userContext) as ContextValue;

    function handelbtnDell(): void {
        if (Boolean(savePlan.find((n) => n === infor))) {
            setsaveplan(savePlan.filter((n) => n !== infor));

            toast.success(`${infor.name} remove`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }

    return (
        <>
            <div className="w-full rounded-2xl border border-[#272c35] bg-[#15181e] p-3 transition-all duration-300 hover:border-[#3a414d] hover:bg-[#181c23]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                    {/* ================= IMAGE ================= */}
                    <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl sm:h-[72px] sm:w-[130px]">
                        <Image
                            src={infor.image}
                            alt="Pull-up"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* ================= INFO ================= */}
                    <div className="min-w-0 flex-1">

                        <h3 className="text-sm font-black uppercase tracking-tight text-white sm:text-base">
                            {infor.name}
                        </h3>

                        <p className="mt-0.5 text-[10px] text-[#858b97] sm:text-xs">
                            {infor.equipment}
                        </p>

                        {/* Stats */}
                        <div className="mt-2 flex flex-wrap items-center gap-3">

                            {/* Duration */}
                            <div className="flex items-center gap-1.5">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="h-3.5 w-3.5 text-[#c8ff00]"
                                >
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M12 7v5l3 2" />
                                </svg>

                                <span className="text-[10px] text-[#c4c8d0]">
                                    {infor.duration} min
                                </span>
                            </div>

                            {/* Calories */}
                            <div className="flex items-center gap-1.5">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-3.5 w-3.5 text-[#c8ff00]"
                                >
                                    <path d="M13.5 2.5c.4 3.2-.8 5.2-2.3 7-1.2 1.5-2.2 3-2.2 5.2 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.5-1.5-4.8-3.3-6.7-.2 1.8-1 3-2.1 4-.1-2.8-.9-6.1-3.1-9.5z" />
                                </svg>

                                <span className="text-[10px] text-[#c4c8d0]">
                                    {infor.caloriesBurned} kcal
                                </span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1.5">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-3.5 w-3.5 text-[#c8ff00]"
                                >
                                    <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3z" />
                                </svg>

                                <span className="text-[10px] text-[#c4c8d0]">
                                    {infor.rating}
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* ================= ACTIONS ================= */}
                    <div className="flex shrink-0 items-center gap-2 sm:ml-auto">

                        {/* View Details */}
                        <Link href={`/card/${infor.id}`}>
                            <button
                                type="button"
                                className="rounded-full border border-[#343b47] px-4 py-2 text-[10px] font-medium text-[#d1d5db] transition-all duration-300 hover:border-[#c8ff00] hover:text-[#c8ff00]"
                            >
                                View Details
                            </button>
                        </Link>


                        {/* Close */}
                        <button
                            onClick={handelbtnDell}
                            type="button"
                            aria-label="Remove workout"
                            className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-[#727986] transition hover:bg-[#20252d] hover:text-white"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                className="h-4 w-4"
                            >
                                <path d="M6 6l12 12M18 6 6 18" />
                            </svg>
                        </button>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Saveplancard;