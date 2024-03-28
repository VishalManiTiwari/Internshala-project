import React from 'react';

const Component2 = ({ items, compcolor,color,bgspotlight}) => {
  return (
    <>
     
        <div style={{backgroundColor: `${compcolor}`,
             color: `${color}`
            }} className='xl:w-[16.5rem] w-[15rem] shadow-md md:w-[20.1rem] rounded h-[33rem]  my-2 py-3 bg-[#3B3E47]'>
          <img className='xl:w-[15.3rem] md:w-[18.9rem] md:h-[22rem] w-[14rem] h-[21rem] sm:w-[18rem] ml-[8px] ralative md:ml-[9px] xl:ml-[10px] xl:h-[22rem]' src={items.image} alt="" />
          <p className='border mt-[16px] border-dashed  border-[gray]'></p>
          <p className='font-semibold  relative top-5'>{items.Name}</p>
          <h1 className='relative top-6'>{items.Time}</h1>
          <p className='text-[13px] relative top-7 text-center text-[gray] font-semibold'>{items.description}</p>
          <button className='bg-black p-2 px-5 text-[13px] md:top-9 xl:top-9 relative top-11 text-[white]'>{items.button}</button>
          <div className='flex relative justify-between bottom-[7.1rem]'>
            {/* bg-[#292B32] */}
            <p style={{backgroundColor: `${bgspotlight}`,
             color: `${color}`
            }} className=' relative -ml-[11.5px] rounded-full w-5 h-5'></p>
            <p style={{backgroundColor: `${bgspotlight}`,
             color: `${color}`
            }} className='relative -mr-[11.5px] rounded-full w-5 h-5'></p>
          </div>
        </div>
     
    </>
  );
};

export default Component2;


