import React, { useState } from 'react';
import './App.css';
import Sports from './Pages/Sports';
import { data1, data2 } from './Components/Data/data';
import Spotlight from './Pages/Spotlight';


const App = () => {
    const [bgColor, setbgColor] = useState('#F9F8FF')
    const [color, setColor] = useState('black')
    const [toggle, setToggle] = useState(true)
    const [compcolor, setCompcolor] = useState('white')
    const [bgsport, setbgsport] = useState('#F7F7F8')
    const [bgspotlight, setbgspotlight] = useState('#F9F8FF')

    const toggleButton = () =>{
       setToggle(!toggle) 
       if(toggle){
        setbgColor('#292B32')
        setColor('white')
        setCompcolor('#3B3E47')
        setbgsport('#292B32')
        setbgspotlight('#292B32')
        document.querySelector('body').style.backgroundColor='#292B32'
       }  else{
        setbgColor('#F9F8FF')
        setColor('black')
        setCompcolor('white')
        setbgsport('#F7F7F8')
        setbgspotlight('#F9F8FF')
        document.querySelector('body').style.backgroundColor='#F9F8FF' 
       }
    }
  return (
    <>
      <div className=''>
        <Sports
          bgColor={bgColor}
          color={color}
          toggle={toggle}
          toggleButton={toggleButton}
          compcolor={compcolor}
          setCompcolor={setCompcolor}
          bgsport={bgsport}
          setbgsport={setbgsport}
          heading='Sports'
          buttonContent='See More'
          data={data1}
        />
        <Spotlight
         bgColor={bgColor}
         color={color}
         compcolor={compcolor}
         setCompcolor={setCompcolor}
         bgspotlight={bgspotlight}
         setbgspotlight={setbgspotlight}
         myHeading='Collection Spotlight'
         data={data2}
        />
      </div>
    </>
  );
};

export default App;


