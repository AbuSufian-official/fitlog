"use client"
import React, { use } from 'react';
import Image from "next/image";
import {
    Bookmark,
    CalendarPlus,
    Dumbbell,
    ChevronRight,
} from "lucide-react";
import { toast } from 'react-toastify';
import { userContext } from '../context/context';
import { Bounce } from 'react-toastify';
const Details = ({ deta }) => {
    let { todaysPlan, settodaysplan, savePlan, setsaveplan } = use(userContext)
    function handelTodaysPlan() {


        if (Boolean(todaysPlan.find((n) => n == deta))) {
            toast.error(`${deta.name} already adedd`, {
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
            return;

        } else {
            settodaysplan([...todaysPlan, deta])
            toast.success(`${deta.name} adedd`, {
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
    function handelSavePlan() {

        if (Boolean(savePlan.find((n) => n == deta))) {
            toast.error(`${deta.name} already adedd`, {
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
            return;

        } else {
            setsaveplan([...savePlan, deta])
            toast.success(`${deta.name} adedd`, {
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
            <div className="min-h-screen px-4 py-8 text-white sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    {/* Main Details Card */}
                    <section className="grid grid-cols-1 gap-7 lg:grid-cols-[0.95fr_1fr]">

                        {/* ================= IMAGE ================= */}
                        <div className="relative h-[420px] overflow-hidden rounded-xl sm:h-[520px] lg:h-[600px]">
                            <Image
                                src={deta.image}
                                alt="Barbell Bench Press"
                                fill
                                priority
                                className="object-cover"
                            />

                            {/* Image overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>

                        {/* ================= CONTENT ================= */}
                        <div className="flex flex-col">

                            {/* Title */}
                            <div>
                                <h1 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
                                    {deta.name}
                                </h1>

                                <p className="mt-2 max-w-2xl text-xs leading-5 text-gray-400 sm:text-sm">
                                    {deta.description}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {deta.muscleGroups.map((n, index) => {
                                    return (<span key={index} className="rounded-full bg-[#c8ff00] px-3 py-1 text-[10px] font-bold text-black">
                                        {n}
                                    </span>)
                                })}



                            </div>

                            {/* ================= STATS ================= */}
                            <div className="mt-4 overflow-hidden rounded-xl border border-[#242933] bg-[#151820]">

                                {/* Equipment */}
                                <div className="flex items-center justify-between border-b border-[#242933] px-4 py-3">
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                                        Equipment
                                    </span>

                                    <span className="text-[10px] text-gray-200 sm:text-xs">
                                        {deta.equipment}
                                    </span>
                                </div>

                                {/* Difficulty */}
                                <div className="flex items-center justify-between border-b border-[#242933] px-4 py-3">
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                                        Difficulty
                                    </span>

                                    <span className="text-[10px] text-gray-200 sm:text-xs">
                                        {deta.difficulty}
                                    </span>
                                </div>

                                {/* Sets */}
                                <div className="flex items-center justify-between border-b border-[#242933] px-4 py-3">
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                                        Sets
                                    </span>

                                    <span className="text-[10px] text-gray-200 sm:text-xs">
                                        {deta.sets}
                                    </span>
                                </div>

                                {/* Reps */}
                                <div className="flex items-center justify-between border-b border-[#242933] px-4 py-3">
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                                        Reps
                                    </span>

                                    <span className="text-[10px] text-gray-200 sm:text-xs">
                                        {deta.reps}
                                    </span>
                                </div>

                                {/* Duration */}
                                <div className="flex items-center justify-between border-b border-[#242933] px-4 py-3">
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                                        Duration
                                    </span>

                                    <span className="text-[10px] text-gray-200 sm:text-xs">
                                        {deta.duration} min
                                    </span>
                                </div>

                                {/* Calories */}
                                <div className="flex items-center justify-between border-b border-[#242933] px-4 py-3">
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                                        Calories
                                    </span>

                                    <span className="text-[10px] text-gray-200 sm:text-xs">
                                        {deta.caloriesBurned} kcal
                                    </span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center justify-between px-4 py-3">
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                                        Rating
                                    </span>

                                    <span className="text-[10px] text-gray-200 sm:text-xs">
                                        {deta.rating}
                                    </span>
                                </div>

                            </div>

                            {/* ================= INSTRUCTIONS ================= */}
                            <div className="mt-5">

                                <h2 className="text-xs font-black uppercase tracking-wider">
                                    Instructions
                                </h2>

                                <div className="mt-3 space-y-2.5">

                                    <div className="flex gap-3">
                                        <span className="text-[10px] text-gray-500">1.</span>
                                        <p className="text-[10px] leading-4 text-gray-400 sm:text-xs">
                                            {deta.instructions[0]}
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <span className="text-[10px] text-gray-500">2.</span>
                                        <p className="text-[10px] leading-4 text-gray-400 sm:text-xs">
                                            {deta.instructions[1]}
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <span className="text-[10px] text-gray-500">3.</span>
                                        <p className="text-[10px] leading-4 text-gray-400 sm:text-xs">
                                            {deta.instructions[2]}
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <span className="text-[10px] text-gray-500">4.</span>
                                        <p className="text-[10px] leading-4 text-gray-400 sm:text-xs">
                                            {deta.instructions[3]}
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* ================= BUTTONS ================= */}
                            <div className="mt-6 flex flex-wrap gap-3">

                                <button
                                    onClick={handelTodaysPlan}
                                    type="button"
                                    className="group inline-flex items-center gap-2 rounded-lg bg-[#c8ff00] px-4 py-2.5 text-[10px] font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-[#d5ff45] active:scale-95"
                                >
                                    <CalendarPlus
                                        size={14}
                                        className="transition-transform duration-300 group-hover:rotate-12"
                                    />

                                    Add to today's plan
                                </button>

                                <button
                                    onClick={handelSavePlan}
                                    type="button"
                                    className="group inline-flex items-center gap-2 rounded-lg border border-[#303641] bg-transparent px-4 py-2.5 text-[10px] font-medium text-gray-300 transition-all duration-300 hover:border-[#c8ff00] hover:text-[#c8ff00]"
                                >
                                    <Bookmark
                                        size={13}
                                        className="transition-transform duration-300 group-hover:scale-110"
                                    />

                                    Save for later
                                </button>

                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Details;