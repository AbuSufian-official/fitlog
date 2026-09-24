import { console } from 'inspector';
import React from 'react';

const Carddetails = async({ params }) => {
    let {cardid}=await params
    console.log(cardid)
    return (
        <>
        <h1>asdad</h1>
        </>
    );
};

export default Carddetails;