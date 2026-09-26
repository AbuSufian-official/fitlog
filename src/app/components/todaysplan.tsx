"use client"
import React, { useContext } from 'react';
import Plancard from './plancard';
import { userContext } from '../context/context';
import Noshow from './noshow';
import type { ContextValue, Workout } from '../types';

const Todaysplan = () => {
    const { todaysPlan } = useContext(userContext) as ContextValue;

    return (
        <>
            <div className='flex flex-col gap-5 mt-3'>
                {todaysPlan.length === 0 ? <Noshow /> : (todaysPlan.map((n: Workout, index: number) => {
                    return (<Plancard key={index} info={n} />)
                }))}
            </div>
        </>
    );
};

export default Todaysplan;