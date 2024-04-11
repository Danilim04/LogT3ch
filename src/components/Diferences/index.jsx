
import { useState,useEffect } from 'react'
import React from 'react';
import Carrosel from './carrosel';

const Diferences = () => {
    
    return (
        <>
            <section className='flex flex-col items-start h-screen min-h-[868px] w-full bg-diferences-pattern bg-no-repeat bg-cover bg-center'>
                <div className="flex w-full text-center flex-col gap-8 px-6 mt-24 md:gap-12">
                    <span className='font-inter text-center text-white text-3xl xl:text-5xl'>Diferenciais</span>
                    <h2 className='font-inter text-center text-white text-6xl font-bold xl:text-8xl'>Descubra a diferença com a LogT3ch</h2>
                </div>
                <Carrosel />
           </section>
        </> 
    )
}

export default Diferences;