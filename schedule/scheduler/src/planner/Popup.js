import React from 'react';
import './event.css';
import {AiOutlineClose} from 'react-icons/ai';

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div>
            <span className = 'close-btn' onClick ={() => props.setTrigger(false)}><AiOutlineClose /></span>
            {props.children}
        </div>

    </div>
  ):"";
}

export default Popup