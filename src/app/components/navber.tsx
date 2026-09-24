import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { color1 } from '../page';
const Navber = () => {
    return (
        <>
            <header>
                <nav className='py-4 border-b-1 border-[#1C1F26]'>
                    <div className='container mx-auto px-2 flex justify-between items-center'>
                        <div>
                            <Link href='/'>
                                <div className='flex gap-1'>
                                    <Image src='/logo.png' alt='FITLOG' width={20} height={5} />
                                    <span className='font-bold'>FITLOG</span>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <ul className='flex gap-2'>
                                <Link href='/'><li className={`font-light text-[15px] text-[#C2F800] bg-[#1A2312] rounded-2xl px-3 py-0.5`}>Workouts</li></Link>
                                <Link href='/'><li className='font-light text-[15px] text-[#9CA3AF] rounded-2xl px-3 py-0.5'>My Plan</li></Link>
                            </ul>

                        </div>
                        <div>
                            <ul className='flex gap-3'>
                                <Link href='/'><li className='font-light text-[15px] text-white '>Plan <span className={`bg-[#C2F800] rounded-full px-[7px] font-bold text-black`}>0</span></li></Link>
                                <Link href='/'><li className='font-light text-[15px] text-[#9CA3AF] '>Saved <span>0</span></li></Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navber;