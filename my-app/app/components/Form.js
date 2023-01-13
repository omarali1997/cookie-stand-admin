import React, { useState } from 'react'

export default function Form() {
    const [userLocation, setUserLocation] = useState("");
    const [userMinimum, setUserMinimum] = useState("");
    const [userMaximum, setUserMaximum] = useState("");
    const [userAverage, setUserAverage] = useState("");
    const [fullMessageState, setFullMessageState] = useState([]);

    const handleChangeLocation = (e) => {
        setUserLocation(e.currentTarget.value);
    }

    const handleChangeMinimum = (e) => {
        setUserMinimum(e.currentTarget.value);
    }

    const handleChangeMaximum = (e) => {
        setUserMaximum(e.currentTarget.value);
    }

    const handleChangeAverage = (e) => {
        setUserAverage(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const fullMessage = {
            'location' : userLocation || 'some plase in the world',
            'minCustomers' : userMinimum || ' 0',
            'maxCustomers' : userMaximum || ' 0',
            'avgCookies' : userAverage || ' 0'

        }

        console.log(fullMessage)
        setFullMessageState([...fullMessageState,fullMessage])
    }

    return (
        <section className='dark:bg-black'>
                    <form className='my-[5%] mx-[5%] bg-violet-800 border-solid border-2 border-sky-500 h-[90%] w-[90%]' onSubmit={onSubmitHandler}>
            <section>
                <h2 className='text-center font-bold pt-4'>
                    Create Cookie Stand
                </h2>
            </section>
                        <section className='m-5'>
                            <span className='m-1'>Location</span>
                            <input 
                            onChange={handleChangeLocation}
                            autoComplete="off" 
                            id="Location" 
                            name="Location" 
                            type="text" 
                            
                            className='bg-white w-[85%] text-black ' />
                        </section>

                        <section className='justify-center grid'>
                            <section className='flex mx-5 my-2 text-center'>

                                <section className='m-1 grid justify-items-center'>
                                    <span className='m-1 text-sm'>Minimum Customers Per Hour</span>
                                    <div>
                                        <input 
                                        onChange={handleChangeMinimum}
                                        autoComplete="off" 
                                        id="Minimum" 
                                        name="Minimum" 
                                        type="text" 
                                        
                                        
                                        
                                        className='bg-white m-2 w-[100%] text-black ' />
                                    </div>
                                </section>
                                <section className='m-1 grid justify-items-center'>
                                    <span className='m-1 text-sm'>Maximum Customers Per Hour</span>
                                    <div>
                                        <input 
                                        onChange={handleChangeMaximum}
                                        autoComplete="off" 
                                        id="Maximum" 
                                        name="Maximum" 
                                        type="text"
                                        
                                        className='bg-white m-2 w-[100%] text-black ' />
                                    </div>
                                </section>
                                <section className='m-1 grid justify-items-center'>
                                    <span className='m-1 text-sm'>Average Cookies Per Sale</span>
                                    <div>
                                        <input 
                                        onChange={handleChangeAverage}
                                        autoComplete="off" 
                                        id="Average" 
                                        name="Average" 
                                        type="text"


                                        className='bg-white m-2 w-[100%] text-black ' />
                                    </div>
                                </section>
                            </section>
                                <button className="mx-[36%] my-2 bg-violet-500 border w-[31%] h-[35px] border-2 border-violet-900 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 grid justify-center">Create</button>
                        </section>
                    </form>

                    <section className='text-center'>
                        <h6>Report Table Coming Soon...</h6>
                       
                    {fullMessageState.length > 0 && fullMessageState.map((item,index)=>{
                    return(
                        <div >
                           <h6>
                            {`{"location" : "${item.location}","minCustomers" : ${item.minCustomers},"maxCustomers" : ${item.maxCustomers},"avgCookies" : ${item.avgCookies}}`}
                            </h6>
                        </div>
                    )
                })}
                               
                    </section>
        </section>
    )
}
