import React from 'react'
import { VerifiedUser,Verified } from 'styled-icons/material-outlined'
import { TargetArrow } from 'styled-icons/fluentui-system-filled'
import { Timer10Select } from 'styled-icons/material-sharp'

function Skills() {
  return (
    <div className='bg-[#CAC633] w-[100%] h-[30rem] mt-32'>
        <ul className='flex  justify-around relative top-[15%] '>
            <li><Timer10Select size={'9rem'}/></li>
            <li><TargetArrow size={'9rem'} /></li>
            <li><Verified size={'9rem'}/></li>
            <li><VerifiedUser size={'9rem'}/></li>
        </ul>
        <ul className='flex justify-around relative top-[15%] mt-6 font-[poppins] text-center font-bold text-[1.7rem]'>
            <li>
                <p>EXPERIENCIA</p>
            </li>
            <li>
                <p>ESPECIALISTAS</p>
            </li>
            <li>
                <p>SATISFACCIÓN </p>
            </li>
            <li>
                <p>CONFIANZA</p>
            </li>
        </ul>

        <ul className='flex justify-around relative top-[15%] mt-6 font-[poppins] text-center text-[0.8rem] italic'>
            <li className='relative left-[%]'>
                <p>Más de 10 años <br /> de experiencia</p>
            </li>
            <li className='relative left-[1.2%]'>
                <p>Equipo técnico <br /> especializado</p>
            </li>
            <li className='relative left-[3.5%] top-[.8rem]'>
                <p>100% cliente</p>
            </li>
            <li className='relative left-[2.9%]'>
                <p>Damos valor añadido  <br /> a nuestra profesionalidad</p>
            </li>
        </ul>
    </div>
  )
}
export default Skills