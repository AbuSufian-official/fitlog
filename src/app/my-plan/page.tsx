"use client"
import React, { useState, useContext } from 'react';
import Link from "next/link";
import Todaysplan from '../components/todaysplan';
import Saveplan from '../components/saveplan';
import { userContext } from '../context/context';
const MyPlan = () => {
    let [plan, setplan] = useState('toplan')
    let { savePlan, todaysPlan, settodaysplan, setsaveplan } = useContext(userContext)
    function handeltab(pera) {
        setplan(pera)

    }
    function hendelSort(peraa) {

        if (peraa == 'duration') {
            if (plan === 'toplan') {
                const a = [...todaysPlan]
                settodaysplan(a.sort((a, b) => a.duration - b.duration))
            } else {
                const x = [...savePlan]
                setsaveplan(x.sort((a, b) => a.duration - b.duration))
            }

        }
        if (peraa == 'caloriest') {
            if (plan === 'toplan') {
                const b = [...todaysPlan]
                settodaysplan(b.sort((a, b) => a.caloriesBurned - b.caloriesBurned))
            } else {
                const y = [...savePlan]
                setsaveplan(y.sort((a, b) => a.caloriesBurned - b.caloriesBurned))
            }

        }
        if (peraa == 'rating') {
            if (plan === 'toplan') {
                const c = [...todaysPlan]
                settodaysplan(c.sort((a, b) => a.rating - b.rating))
            } else {
                const z = [...savePlan]
                setsaveplan(z.sort((a, b) => a.rating - b.rating))
            }

        }
    }






    return (
        <>

            <section className="min-h-screen  px-4 py-8 text-white sm:px-6 md:py-10 lg:px-10">

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

                                    {plan == 'toplan' ? (todaysPlan.length) : (savePlan.length)}
                                </p>
                            </div>


                            {/* Minutes */}
                            <div className="py-5 sm:px-6 sm:py-0">
                                <p className="text-[10px] text-[#858b97] sm:text-xs">
                                    Minutes
                                </p>

                                <p className="mt-1 text-3xl font-black leading-none text-white sm:text-4xl">
                                    {plan == 'toplan' ? (todaysPlan.reduce((acc, curr) => {
                                        acc += curr.duration
                                        return acc
                                    }, 0)) : (savePlan.reduce((acc, curr) => {
                                        acc += curr.duration
                                        return acc
                                    }, 0))}
                                </p>
                            </div>


                            {/* Calories */}
                            <div className="pt-5 sm:pl-6 sm:pt-0">
                                <p className="text-[10px] text-[#858b97] sm:text-xs">
                                    Calories
                                </p>

                                <p className="mt-1 text-3xl font-black leading-none text-white sm:text-4xl">
                                    {plan == 'toplan' ? (todaysPlan.reduce((acc, curr) => {
                                        acc += curr.caloriesBurned
                                        return acc
                                    }, 0)) : (savePlan.reduce((acc, curr) => {
                                        acc += curr.caloriesBurned
                                        return acc
                                    }, 0))}

                                </p>
                            </div>

                        </div>

                    </div>


                    {/* ================= FILTER BAR ================= */}
                    <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        {/* Tabs */}
                        <div className="flex w-fit rounded-lg border border-[#252a33] bg-[#14171d] p-1">


                            <button
                                onClick={() => handeltab('toplan')}
                                className={`${Boolean(plan === 'toplan') ? `bg-[#1F242D] text-white` : 'bg-transparent text-[#858b97]'} ${Boolean(plan === 'toplan') ? `text-black` : 'text-[#858b97]'} text-[12px] rounded-md font-bold  px-5 py-2`}>Today's Plan</button>

                            <button
                                onClick={() => handeltab('saveplan')}
                                className={`${Boolean(plan === 'saveplan') ? "bg-[#1F242D] text-white" : 'bg-transparent text-[#858b97]'} text-[12px] font-bold rounded-md px-5 py-2`}>Saved</button>

                        </div>


                        {/* Sort */}
                        <div className="flex items-center gap-2">

                            <span className="text-[10px] text-[#858b97] sm:text-xs">
                                Sort By
                            </span>

                            <select onChange={(e) => hendelSort(e.target.value)} defaultValue="Select" className="select select-neutral">
                                <option disabled={true}>Select</option>
                                <option value='duration'>Duration</option>
                                <option value='caloriest'>Caloriest</option>
                                <option value='rating'>Rating</option>
                            </select>

                        </div>

                    </div>



                    {Boolean(plan === 'toplan') ? (<Todaysplan />) : (<Saveplan />)}
                </div>

            </section>

        </>
    );
};

export default MyPlan;