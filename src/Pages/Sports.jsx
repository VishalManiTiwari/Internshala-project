// import React from 'react'
// import Component1 from '../Components/Component1'
// import Advertisement from '../Components/Advertisement';
// import { BsToggleOff } from "react-icons/bs";
// import { BsToggleOn } from "react-icons/bs";

// const Sports = (props) => {
//     const {heading,buttonContent,data,bgColor,color,toggleButton,toggle,compcolor,bgsport} = props;
//   return (
//     <div className='' style={{
//       backgroundColor: `${bgColor}`,
//       color: `${color}`

//     }}> 
//       <div className=' text-[27px]  ml-[12rem] '  onClick={toggleButton}>
//         {
//           toggle?(
//             <BsToggleOn />
//           ):(<BsToggleOff />)
//         }
//       </div>

//       <div className='top-4  xl:ml-[5.3rem]'  >
//            <h1 className='relative md:ml-5 xl:ml-[0.6rem] top-9 ml-auto md:top-12  text-[26px] font-bold' >{heading}</h1>
//      </div>
//       <div  className=' p-4 grid md:grid-cols-2 xl:gap-4 sm:grid-cols-1 justify-center items-center xl:flex ' >
//     {
//       data?.map((response)=>(
//         <Component1 
//         compcolor={compcolor}
//         bgsport={bgsport}
//         item={response} />
//       ))
//      }
//      <Advertisement compcolor={compcolor}  />
//       </div>
//         <div className='text-center relative top-10'>
//             <button className='bg-blue-500 p-2 px-5 relative top-10 rounded text-[white]'>{buttonContent}</button>
//         </div>
//     </div>
//   )
// }

// export default Sports





import React from 'react'
import Component1 from '../Components/Component1'
import Advertisement from '../Components/Advertisement';
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";

const Sports = (props) => {
    const {heading,buttonContent,data,bgColor,color,toggleButton,toggle,compcolor,bgsport} = props;
  return (
    <div className='' style={{
      backgroundColor: `${bgColor}`,
      color: `${color}`

    }}> 
      <div className=' text-[27px]  ml-[12rem] '  onClick={toggleButton}>
        {
          toggle?(
            <BsToggleOn />
          ):(<BsToggleOff />)
        }
      </div>

      <div className='top-4  xl:ml-[5.3rem]'  >
           <h1 className='relative md:ml-5 xl:ml-[0.6rem] top-9 ml-auto md:top-12  text-[26px] font-bold' >{heading}</h1>
     </div>
      <div  className=' p-4 grid md:grid-cols-2 xl:gap-4 sm:grid-cols-1 justify-center items-center xl:flex ' >
    {
      data?.map((response)=>(
        <Component1 
        compcolor={compcolor}
        bgsport={bgsport}
        item={response} />
      ))
     }
     <Advertisement compcolor={compcolor}  />
      </div>
        <div className='text-center relative top-10'>
            <button className='bg-blue-500 p-2 px-5 relative top-10 rounded text-[white]'>{buttonContent}</button>
        </div>
    </div>
  )
}

export default Sports





