"use client"
import React, { useContext } from 'react';
import Saveplancard from './saveplancard';
import { userContext } from '../context/context';
import Noshow from './noshow';
import type { ContextValue, Workout } from '../types';

const Saveplan = () => {
    const { savePlan } = useContext(userContext) as ContextValue;
    return (
        <div className='flex flex-col gap-5 mt-3'>
            {savePlan.length === 0 ? (<Noshow />) : (savePlan.map((deta: Workout) => {
                return (<Saveplancard key={deta.id} infor={deta} />)
            }))}
        </div>
    );
};

export default Saveplan;