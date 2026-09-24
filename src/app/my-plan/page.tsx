"use client"
import React, { useState } from 'react';
import Link from "next/link";
import Todaysplan from '../components/todaysplan';
import Saveplan from '../components/saveplan';

const MyPlan = () => {
    let [plan,setplan]=useState('todaysplan')
    let [active,setactive]=useState(false)
    function handeltab(pera){
        if(pera=='todaysplan'){
            setactive(!active)
        }else if(pera=='saveplan'){
            setactive(!active)
        }
    }
    console.log(active)
    return (
        <>

            <section className="min-h-screen bg-[#0d0f13] px-4 py-8 text-white sm:px-6 md:py-10 lg:px-10">

                <div className="mx-auto container px-2">

                    {/* ================= HEADER ================= */}
                    <div>
                        <h1 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
                            My Plan
                        </h1>

                        <p className="mt-1 text-xs text-[#858b97] sm:text-sm">
                            Cap of five lifts for today. Finish them, then load more.
                        </p>
                    </div>


                    {/* ================= SUMMARY ================= */}
                    <div className="mt-6 rounded-xl border border-[#252a33] bg-[#14171d] px-5 py-6 sm:px-6 md:py-7">

                        <div className="grid grid-cols-1 divide-y divide-[#252a33] sm:grid-cols-3 sm:divide-x sm:divide-y-0">

                            {/* Exercises */}
                            <div className="pb-5 sm:pb-0 sm:pr-6">
                                <p className="text-[10px] text-[#858b97] sm:text-xs">
                                    Exercises
                                </p>

                                <p className="mt-1 text-3xl font-black leading-none text-[#c8ff00] sm:text-4xl">
                                    2
                                </p>
                            </div>


                            {/* Minutes */}
                            <div className="py-5 sm:px-6 sm:py-0">
                                <p className="text-[10px] text-[#858b97] sm:text-xs">
                                    Minutes
                                </p>

                                <p className="mt-1 text-3xl font-black leading-none text-white sm:text-4xl">
                                    23
                                </p>
                            </div>


                            {/* Calories */}
                            <div className="pt-5 sm:pl-6 sm:pt-0">
                                <p className="text-[10px] text-[#858b97] sm:text-xs">
                                    Calories
                                </p>

                                <p className="mt-1 text-3xl font-black leading-none text-white sm:text-4xl">
                                    190
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* ================= FILTER BAR ================= */}
                    <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        {/* Tabs */}
                        <div className="flex w-fit rounded-lg border border-[#252a33] bg-[#14171d] p-1">

                            <button
                                onClick={()=>handeltab('todaysplan')}
                                type="button"
                                className={`${active ? 'text-4xl' : "bg-transparent"}rounded-md px-4 py-2 text-[10px] font-medium text-[#858b97] transition hover:text-white sm:px-5`}
                            >
                                Today's Plan
                            </button>

                            <button
                                onClick={()=>handeltab('saveplan')}
                                type="button"
                                className="rounded-md bg-[#20252e] px-5 py-2 text-[10px] font-bold text-white shadow-sm sm:px-7"
                            >
                                Saved
                            </button>

                        </div>


                        {/* Sort */}
                        <div className="flex items-center gap-2">

                            <span className="text-[10px] text-[#858b97] sm:text-xs">
                                Sort By
                            </span>

                            <button
                                type="button"
                                className="flex items-center gap-2 rounded-lg border border-[#292f39] bg-[#14171d] px-3 py-2 text-[10px] text-[#d1d5db] transition hover:border-[#c8ff00] hover:text-[#c8ff00]"
                            >
                                Duration

                                <svg
                                    width="11"
                                    height="11"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="text-[#858b97]"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>

                            </button>

                        </div>

                    </div>


                    {/* ================= EMPTY STATE ================= */}


                    <Todaysplan />
                    <Saveplan/>
                    


                </div>

            </section>

        </>
    );
};

export default MyPlan;