import React from 'react'

const Component1 = (props) => {
 const {item,compcolor,color,bgsport} = props; 
  return (
    
         <>
            <div key={item.id} className=' xl:w-[16rem] w-[15rem] justify-center items-center sm:justify-center sm:items-center
            sm:w-[18.5rem] shadow-2xl md:w-[20.1rem] relative top-14  rounded xl:h-[32rem] 
             my-2 g  py-3 ' 
            //  bg-[#3B3E47]
             style={{backgroundColor: `${compcolor}`,
             color: `${color}`
            }}
             >
               <img className='xl:w-[14.5rem] ml-[10px] w-[13.8rem] md:w-[19rem] sm:w-[17rem] sm:ml-[11px] md:h-[22rem] 
                ralative md:ml-[9px] xl:ml-[12px] xl:h-[22rem]' src={item.img} alt="" />
                 <h1 className='relative sm:text-[26px] opacity-95 ml-3 xl:top-3  my-4 
                 md:text-[22px] xl:text-[21px] text-[21px] font-semibold xl:text-[18px]'>{item.description}
                 </h1>

                 {/* bg-[#292B32] */}
             <div style={{backgroundColor: `${bgsport}`,
             color: `${color}`
            }}
             
             className='flex sm:mx-[9px] mx-2 gap-10 h-[4rem] p-3 rounded bg-gray-100 md:mx-[12px]  xl:mx-[10px]
              relative md:top-[2px]  xl:top-[10px]'  >
               <div className=''>
                 <p className='text-[12px] sm:text-[14px] font-semibold text-[gray]'>{item.events}</p>
                 <h1 className='font-semibold'>{item.Number} Events</h1>
               </div>
              <div>
                <p className='text-[11px] sm:text-[14px] font-semibold text-[gray]'>{item.sports}</p>
                <h1 className='font-semibold'>{item.Sname}</h1>
              </div>
             </div>
           </div>
       </>
  )
}

export default Component1


