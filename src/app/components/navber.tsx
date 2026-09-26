"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useUserContext } from '../context/context';

const Navber = () => {
    const { todaysPlan, savePlan } = useUserContext();
    const [tabswich, settabswich] = useState<string>('workout');
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    function handelmanutab(p: string): void {
        settabswich(p);
        setMenuOpen(false);
    }

    return (
        <>
            <header>
                <nav className='py-4 border-b border-[#1C1F26]'>
                    <div className='container mx-auto px-4 flex justify-between items-center'>

                        {/* Logo */}
                        <div>
                            <Link href='/'>
                                <div className='flex gap-1 items-center'>
                                    <Image src='/logo.png' alt='FITLOG' width={20} height={20} />
                                    <span className='font-bold text-white'>FITLOG</span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Nav Links */}
                        <div className='hidden sm:block'>
                            <ul className='flex gap-2'>
                                <Link href='/'>
                                    <li onClick={() => handelmanutab('workout')} className={`${tabswich === 'workout' ? "text-[#C2F800] bg-[#1A2312]" : "text-[#9CA3AF]"} font-light text-[15px] rounded-2xl px-3 py-0.5 cursor-pointer`}>Workouts</li>
                                </Link>
                                <Link href='/my-plan'>
                                    <li onClick={() => handelmanutab('myplan')} className={`${tabswich === 'myplan' ? "text-[#C2F800] bg-[#1A2312]" : "text-[#9CA3AF]"} font-light text-[15px] rounded-2xl px-3 py-0.5 cursor-pointer`}>My Plan</li>
                                </Link>
                            </ul>
                        </div>

                        {/* Desktop Stats + Mobile Hamburger Row */}
                        <div className='flex items-center gap-4'>
                            {/* Plan / Saved counts */}
                            <ul className='flex gap-3'>
                                <Link href='/my-plan'>
                                    <li className='font-light text-[15px] text-white'>Plan <span className='bg-[#C2F800] rounded-full px-[7px] font-bold text-black'>{todaysPlan.length}</span></li>
                                </Link>
                                <Link href='/my-plan'>
                                    <li className='font-light text-[15px] text-[#9CA3AF]'>Saved <span>{savePlan.length}</span></li>
                                </Link>
                            </ul>

                            {/* Hamburger Button (mobile only) */}
                            <button
                                className='sm:hidden flex flex-col gap-1.5 p-1'
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label='Toggle menu'
                            >
                                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    {menuOpen && (
                        <div className='sm:hidden border-t border-[#1C1F26] mt-3 px-4 pb-4'>
                            <ul className='flex flex-col gap-2 pt-3'>
                                <Link href='/'>
                                    <li onClick={() => handelmanutab('workout')} className={`${tabswich === 'workout' ? "text-[#C2F800] bg-[#1A2312]" : "text-[#9CA3AF]"} font-light text-[15px] rounded-2xl px-3 py-2 cursor-pointer`}>Workouts</li>
                                </Link>
                                <Link href='/my-plan'>
                                    <li onClick={() => handelmanutab('myplan')} className={`${tabswich === 'myplan' ? "text-[#C2F800] bg-[#1A2312]" : "text-[#9CA3AF]"} font-light text-[15px] rounded-2xl px-3 py-2 cursor-pointer`}>My Plan</li>
                                </Link>
                            </ul>
                        </div>
                    )}
                </nav>
            </header>
        </>
    );
};

export default Navber;