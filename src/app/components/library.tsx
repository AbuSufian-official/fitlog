
import Link from 'next/link';
import Card from '../card/card';


const Library = async() => {
    
        let fetchdata = await fetch('https://api.abcz.workers.dev/api/fitlog');
        let convert = await fetchdata.json();
        
    return (
        <>
            <section>
                <div className='container mx-auto px-2'>
                    <div>
                        <h2 className='text-2xl font-bold'>THE LIBRARY</h2>
                        <p className='text-[14px] text-[#9CA3AF] font-light'>Twelve lifts covering every major muscle group.</p>
                    </div>
                    <div className='grid grid-cols-3 justify-between items-center gap-6 py-12'>
                        {convert.map((obj)=>{
                            return(
                                
                                    <Card key={obj.id} data={obj}/>
                                
                            
                            )
                        })}
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default Library;