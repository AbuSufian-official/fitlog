
import React, { useContext } from 'react';
import Saveplancard from './saveplancard';
import { userContext } from '../context/context';
import Noshow from './noshow';
const Saveplan = () => {
    let { savePlan,setsaveplan } = useContext(userContext)
    return (
        <div className='flex flex-col gap-5 mt-3'>
            {savePlan.length==0? (<Noshow/>) : (savePlan.map((deta)=>{
                return(<Saveplancard key={deta.id} infor={deta}/>)
            })) }
            
            
        </div>
    );
};

export default Saveplan;