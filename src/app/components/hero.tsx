import React from 'react';
// import { color1 } from '../page';
import Image from 'next/image';
const Hero = () => {
    return (
        <>
            <section className='py-13'>
                <div className='container mx-auto px-2  bg-[#15171D] border border-[#222630] rounded-[15px] '>
                    <div className='px-9 flex justify-between py-10 items-center'>
                        <div>
                            <h3 className={`text-[#C2F800] text-[12px] mb-5`}>WORKOUT LIBRARY</h3>
                            <h1 className={`text-6xl font-bold mb-4`}>TRAIN WITH INTENT. LOG<br></br> EVERY SET.</h1>
                            <p className={`text-[14px] text-[#9CA3AF] font-light mb-4`}>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br></br>
                                into today's plan, and watch the week's work add up.</p>
                            <button className={`bg-[#C2F800] text-black px-4.5 py-1.5 text-[13px] rounded-[4px]`}>BROWSE WORKOUTS</button>

                        </div>
                        <div>
                            <Image src='/banner.png' alt='human gym' width={334} height={334} ></Image>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Hero;
// THE LIBRARY