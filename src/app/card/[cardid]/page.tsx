
import { console } from 'inspector';
import React from 'react';


import Details from '@/app/components/details';


const Carddetails = async ({ params }) => {
    let { cardid } = await params
    let fetchdeta = await fetch(`https://api.abcz.workers.dev/api/fitlog/${cardid}`);
    let deta = await fetchdeta.json();
    console.log(deta)
    return (
        <>
            <Details deta={deta}/>

        </>
    );
};

export default Carddetails;