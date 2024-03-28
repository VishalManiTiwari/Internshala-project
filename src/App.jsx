// import React, { useState } from 'react';
// import './App.css';
// import Sports from './Pages/Sports';
// import { data1, data2 } from './Components/Data/data';
// import Spotlight from './Pages/Spotlight';


// const App = () => {
//     const [bgColor, setbgColor] = useState('#F9F8FF')
//     const [color, setColor] = useState('black')
//     const [toggle, setToggle] = useState(true)
//     const [compcolor, setCompcolor] = useState('white')
//     const [bgsport, setbgsport] = useState('#F7F7F8')
//     const [bgspotlight, setbgspotlight] = useState('#F9F8FF')

//     const toggleButton = () =>{
//        setToggle(!toggle) 
//        if(toggle){
//         setbgColor('#292B32')
//         setColor('white')
//         setCompcolor('#3B3E47')
//         setbgsport('#292B32')
//         setbgspotlight('#292B32')
//         document.querySelector('body').style.backgroundColor='#292B32'
//        }  else{
//         setbgColor('#F9F8FF')
//         setColor('black')
//         setCompcolor('white')
//         setbgsport('#F7F7F8')
//         setbgspotlight('#F9F8FF')
//         document.querySelector('body').style.backgroundColor='#F9F8FF' 
//        }
//     }
//   return (
//     <>
//       <div className=''>
//         <Sports
//           bgColor={bgColor}
//           color={color}
//           toggle={toggle}
//           toggleButton={toggleButton}
//           compcolor={compcolor}
//           setCompcolor={setCompcolor}
//           bgsport={bgsport}
//           setbgsport={setbgsport}
//           heading='Sports'
//           buttonContent='See More'
//           data={data1}
//         />
//         <Spotlight
//          bgColor={bgColor}
//          color={color}
//          compcolor={compcolor}
//          setCompcolor={setCompcolor}
//          bgspotlight={bgspotlight}
//          setbgspotlight={setbgspotlight}
//          myHeading='Collection Spotlight'
//          data={data2}
//         />
//       </div>
//     </>
//   );
// };

// export default App;



import React, { useEffect, useState } from 'react';
import './App.css';
import Sports from './Pages/Sports';
import { data1, data2 } from './Components/Data/data';
import Spotlight from './Pages/Spotlight';

const App = () => {
    const [bgColor, setbgColor] = useState('#F9F8FF');
    const [color, setColor] = useState('black');
    const [toggle, setToggle] = useState(() => {
        const theme = localStorage.getItem('theme');
        return theme ? JSON.parse(theme) : true;
    });
    const [compcolor, setCompcolor] = useState('white');
    const [bgsport, setBgsport] = useState('#F7F7F8');
    const [bgspotlight, setBgspotlight] = useState('#F9F8FF');

    useEffect(() => {
        if (toggle) {
            setbgColor('#292B32');
            setColor('white');
            setCompcolor('#3B3E47');
            setBgsport('#292B32');
            setBgspotlight('#292B32');
            document.querySelector('body').style.backgroundColor = '#292B32';
        } else {
            setbgColor('#F9F8FF');
            setColor('black');
            setCompcolor('white');
            setBgsport('#F7F7F8');
            setBgspotlight('#F9F8FF');
            document.querySelector('body').style.backgroundColor = '#F9F8FF';
        }
        localStorage.setItem('theme', JSON.stringify(toggle));
    }, [toggle]);

    const toggleButton = () => {
        setToggle(!toggle);
    };

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
                    setBgsport={setBgsport}
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
                    setBgspotlight={setBgspotlight}
                    myHeading='Collection Spotlight'
                    data={data2}
                />
            </div>
        </>
    );
};

export default App;
