import React , { useState } from 'react';
import './event.css';
import Popup from './Popup';
import Form from './Form';


const Event = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    

    return(
        <div>
            <div className='task'>
                <button className = 'button' onClick = {() => setButtonPopup(true)}   > Create Event </button>
                <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                    <h3>
                        <Form />
                    </h3>
                </Popup>
            </div>
        </div>
        
    );
}

export default Event;