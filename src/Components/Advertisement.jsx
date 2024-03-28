import React from 'react';

const Advertisement = ({ compcolor,color }) => {
  return (
    <>  
        
         
        <div style={{backgroundColor: `${compcolor}`,
             color: `${color}`
            }} className="xl:w-[16rem] w-[15rem] justify-center items-center sm:w-[18.5rem] top-14 shadow-md md:w-[20.1rem] relative rounded xl:h-[32rem]  my-2 g  py-3 bg-[#3B3E47]">
          <img
            className="xl:w-[14.5rem] sm:w-[17rem] ml-[10px] sm:ml-[11px] md:w-[19rem] md:h-[18rem]  ralative md:ml-[9px] xl:ml-[12px] xl:h-[14rem]"
            src="./src/assets/adv.png"
            alt=""
          />
          <h1 className="py-2 opacity-91 text-center font-semibold sm:text-[27px] md:text-[26px] text-[23px] xl:text-[22px]">
            Advertisement title
          </h1>
          <p className="text-[gray] font-semibold w-[13.5rem] ml-[1rem] relative md:ml-[3rem] xl:ml-[2rem] sm:ml-[2rem] sm:w-[15rem] text-[12px] md:w-[14rem] xl:w-[13rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum assumenda aperiam. Dolore consequatur et quae nihil alias soluta aliquam cum nemo qui dolor, quidem earum laudantium sed quam sequi magni! Eum ut voluptate nemo et iure tempora.
          </p>
          <p className="bg-black md:ml-[17.55rem] md:bottom-[29.32rem] sm:ml-[15.7rem] sm:bottom-[28.31rem] xl:mx-[13.25rem] xl:bottom-[26.05rem] relative w-[2rem] p-1 ml-[12.3rem] bottom-[25.8rem] text-center  px-2 text-[12px] text-[white]">
            Ad
          </p>
        </div>
     
    </>
  );
};

export default Advertisement;


