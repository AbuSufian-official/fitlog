import React from 'react';
import Details from '@/app/components/details';
import type { Workout } from '@/app/types';

interface CarddetailsProps {
    params: Promise<{ cardid: string }>;
}

const Carddetails = async ({ params }: CarddetailsProps) => {
    const { cardid } = await params;
    const fetchdeta = await fetch(`https://api.abcz.workers.dev/api/fitlog/${cardid}`);
    const deta: Workout = await fetchdeta.json();
    return (
        <>
            <Details deta={deta} />
        </>
    );
};

export default Carddetails;