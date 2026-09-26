import Card from '../card/card';
import { Suspense } from 'react';
import Loading from '../card/loading';
import type { Workout } from '../types';

const Library = async () => {
    const fetchdata = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const convert: Workout[] = await fetchdata.json();

    return (
        <>
            <section id="libery">
                <div className='container mx-auto px-2'>
                    <div>
                        <h2 className='text-2xl font-bold text-white'>THE LIBRARY</h2>
                        <p className='text-[14px] text-[#9CA3AF] font-light'>Twelve lifts covering every major muscle group.</p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-6 py-12'>
                        <Suspense fallback={<Loading />}>
                            {convert.map((obj: Workout) => {
                                return (
                                    <Card key={obj.id} data={obj} />
                                )
                            })}
                        </Suspense>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Library;