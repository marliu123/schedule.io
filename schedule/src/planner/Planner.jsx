import React, {useState} from 'react';
import './planner.css';
import Weeks from './Weeks';
import Event from './Event';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Planner = () => {
    let date = new Date();
    const [currYear, setCurrYear] = useState(date.getFullYear());
    const [currMonth, setCurrMonth] = useState(date.getMonth());

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currDate = () =>{
        let firstDay = new Date(currYear, currMonth, 1).getDay();
        let lastDay = new Date(currYear, currMonth + 1, 0).getDate();
        let lastDayLastMonth = new Date(currYear, currMonth, 0).getDate();
        let liTag = [];
        for(let i = firstDay; i > 0; i--){
            liTag.push(<li key = {i + "in"} className ='inactive'>{lastDayLastMonth - i + 1}</li>);
        }

        for(let i = 1; i <= lastDay; i++){
            let today = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
            liTag.push(<li key = {i} className ={today}>{i}</li>);
        }
        return( liTag.map(liTag =>(liTag)));
    }
    

    const incrementer = () =>{
        setCurrMonth(currMonth + 1);
        if(currMonth > 10){
            setCurrYear(currYear + 1);
            setCurrMonth(0);
        }
    };

    const decrementer = () =>{
        setCurrMonth(currMonth - 1);
        if(currMonth < 1){
            setCurrYear(currYear - 1);
            setCurrMonth(11);
        }
    };

    return(
        <div className='task-wrapper'>
            <div className='body'>
                <div className='wrapper'>
                    <header>
                        <p className = 'current-date'>{months[currMonth]} {currYear}</p>
                        <div className='icons'>
                            <span onClick = {decrementer}>< HiChevronLeft /></span>
                            <span onClick = {incrementer}>< HiChevronRight /></span>
                        </div>
                    </header>
                    <div className='calendar'>
                        <Weeks />
                        <ul className='days'> 
                        {currDate()}
                        </ul>
                    </div>
                </div>
            </div>
            <Event />
        </div>
    );
}

export default Planner;
