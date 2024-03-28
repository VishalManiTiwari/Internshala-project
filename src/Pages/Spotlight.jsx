import React from 'react'
import Component2 from '../Components/Component2';
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import Description from '../Components/Description';


const Spotlight = (props) => {
    const {data, myHeading,bgColor,color,compcolor,bgspotlight} = props;
  return (
    <> 
    <div className='py-14' style={{
      backgroundColor: `${bgColor}`,
      color: `${color}`
    }}>
        <h1 className='relative text-[25px] xl:text-[44px] font-bold text-center top-[70px]'>{myHeading}</h1>
        <Description />
       <div className='xl:flex xl:gap-19 text-center p-6 justify-center top-[4rem] relative items-center'>
        <div className='relative xl:mr-[5rem]'>
        <RiArrowLeftSLine className='border relative xl:flex hidden text-[blue] h-[3rem] text-[28px] border-blue-500' />
        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 
          justify-center
          xl:flex xl:gap-8 gap-4  grid sm:grid-cols-1'>
        {
          data?.map((res)=>(
            <Component2 
            bgspotlight={bgspotlight}
            compcolor={compcolor}
            items={res}/>
          ))
        }
        
        </div>
        <div className='relative xl:ml-[5rem]'>
        <RiArrowRightSLine className='border  xl:flex hidden text-[blue] h-[3rem] text-[28px] border-blue-500' />
        </div>
        </div>
        </div>
    </>
  )
}

export default Spotlight



