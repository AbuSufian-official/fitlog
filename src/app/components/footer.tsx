import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    return (
        <>
            <footer>
                <div className='border-t border-[#1C1F26] '>
                    <div className='container mx-auto px-2 py-8 flex justify-between items-center'>
                        <Link href='/'>
                            <div className='flex gap-1'>
                                <Image src='/logo.png' alt='FITLOG' width={20} height={5} />
                                <span className='font-bold'>FITLOG</span>
                            </div>
                        </Link>
                        <div>
                            <p className='text-[14px] font-light text-[#9CA3AF]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;