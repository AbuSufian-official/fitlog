import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <section className='py-13'>
                <div className='container mx-auto px-2  bg-[#15171D] border border-[#222630] rounded-[15px] '>
                    <div className='px-5 sm:px-9 flex flex-col sm:flex-row justify-between py-10 items-center gap-6 sm:gap-0'>
                        <div className='text-center sm:text-left'>
                            <h3 className={`text-[#C2F800] text-[12px] mb-5`}>WORKOUT LIBRARY</h3>
                            <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-bold mb-4`}>TRAIN WITH INTENT. LOG<br className='hidden sm:block' /> EVERY SET.</h1>
                            <p className={`text-[14px] text-[#9CA3AF] font-light mb-4`}>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br className='hidden sm:block' />
                                into today&apos;s plan, and watch the week&apos;s work add up.</p>
                            <a href='#libery'>
                                <button className={`bg-[#C2F800] text-black px-4.5 py-1.5 text-[13px] rounded-[4px]`}>BROWSE WORKOUTS</button>
                            </a>


                        </div>
                        <div className='shrink-0'>
                            <Image src='/banner.png' alt='human gym' width={334} height={334} className='max-w-[200px] sm:max-w-[334px] w-full'></Image>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Hero;
// THE LIBRARY