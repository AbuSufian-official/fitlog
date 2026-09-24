`'use client'`
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiClock } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";




const Card = ({ data }) => {

    return (
        <>
            <Link href={`http://localhost:3000/card/${data.id}`}>
                <div className="group overflow-hidden rounded-[20px] border border-[#272b32] bg-[#15171c] text-white shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#3a3f48] hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]">

                    {/* Image */}
                    <div className="relative h-[245px] w-full overflow-hidden">

                        <Image src={data.image} alt='gym photo' fill priority className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#15171c]/20 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="px-8 pb-7 pt-7">

                        {/* Tags */}
                        <div className="mb-5 flex gap-3">
                            {data.muscleGroups.map((n,index) => {
                                return (
                                    <span key={index} className="rounded-full bg-[#b8ff00] px-3.5 py-1 text-[14px] font-bold uppercase tracking-wide text-black transition-all duration-300 group-hover:bg-[#c6ff29]">
                                        {n}
                                    </span>
                                )
                            })}
                        </div>

                        {/* Title */}
                        <h2 className="text-[24px] font-extrabold uppercase leading-tight tracking-wide text-white">
                            {data.name}
                        </h2>

                        {/* Category */}
                        <p className="mt-2 text-[16px] text-[#969ba5]">
                            {data.equipment}
                        </p>

                        {/* Divider */}
                        <div className="my-5 h-px w-full bg-[#272b32]" />

                        {/* Information */}
                        <div className="flex  items-center gap-x-6 gap-y-3 text-[15px] text-[#969ba5]">

                            {/* Time */}
                            <div className="flex items-center gap-2">
                                <FiClock className='text-[18px]'/>
                                

                                <span>{data.duration} min</span>
                            </div>

                            {/* Calories */}
                            <div className="flex items-center gap-2">
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M13.2 2.5c.3 3-1.5 4.4-2.9 5.9-1.1 1.2-2 2.3-2 4.2 0 1.5.8 2.8 2 3.5-.2-.6-.1-1.5.4-2.3.5-.8 1.2-1.4 1.8-2.2.6 1.5 1.8 2.5 1.8 4.5 0 .6-.1 1.2-.4 1.7 1.8-.8 3-2.6 3-4.7 0-2.3-1.1-4.1-2.1-5.6-.8-1.3-1.5-2.7-1.6-5z" />
                                    <path d="M7.3 10.5C5.8 12 5 13.7 5 15.4c0 3.4 2.8 6.1 6.5 6.1s6.5-2.7 6.5-6.1c0-1.1-.3-2.2-.8-3.1.1 2.9-1.5 5.1-4 5.8.2-.5.3-1 .3-1.5 0-2.1-1.1-3.5-2.2-4.8-.6-.7-1.2-1.5-1.4-2.5-.9.4-1.8.9-2.6 1.2z" />
                                </svg>

                                <span>{data.caloriesBurned} kcal</span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <FaRegStar className='text-[18px]'/>

                                <span>{data.rating}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Card;