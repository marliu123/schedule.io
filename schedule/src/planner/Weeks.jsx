import React from 'react';
import './planner.css';

const weeks = () => {
    return(
        <div>
            <div className='calendar'>
                    <ul className='weeks'>
                        <li>Sun</li>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                    </ul>
                    <ul className='days'>
                    </ul>
                </div>
        </div>

    );

    
}


export default weeks;