import React , { useState } from 'react';
import './event.css';
import Popup from './Popup';

const Event = () => {
    const [buttonPopup, setButtonPopup] = useState(false)

    return(
        <div>
            <div className='task'>
                <button className = 'button' onClick = {() => setButtonPopup(true)}   > Create Event </button>
                <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                    <h3 classname = 'popup-inner'>
                        My popup  
                    </h3>
                </Popup>
            </div>
        </div>
        
    );
}

export default Event;