import React from "react";
import Tilt from 'react-parallax-tilt';
import './logo.css' 
import brain from './brain.png';
const Logo = () => {
    return (
    <div className='ma4 mt0'>
     <Tilt className='Tilt br2 shadow-2' style={{ height: 150, width: 150}}>
                <div>
                    <img style={{ paddingTop: '1px', paddingBottom: '5px'}} alt='logo' src={brain}/>
                    {/*<a href="https://www.flaticon.com/free-icons/brain" title="brain icons">Brain icons created by DinosoftLabs - Flaticon</a>*/}
      </div>
    </Tilt>
    </div>
 )
}

export default Logo;