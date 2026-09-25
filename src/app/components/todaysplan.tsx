"use client"
import React, { useContext } from 'react';

import Plancard from './plancard';
import { userContext } from '../context/context';
import Noshow from './noshow';
const Todaysplan = () => {
    let { todaysPlan } = useContext(userContext)

    return (
        <>
           <div className='flex flex-col gap-5 mt-3'>
                {todaysPlan.length==0 ? <Noshow/>: (todaysPlan.map((n,index)=>{
                return(<Plancard key={index} info={n}/>)
            }))}
           </div>
            

             

            










        </>
    );
};

export default Todaysplan;