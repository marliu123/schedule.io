import React from 'react';
import './planner.css';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Planner = () => {
    let date = new Date();
    let currYear = date.getFullYear();
    let currMonth = date.getMonth();

    

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currDate = () =>{
        let firstDay = new Date(currYear, currMonth, 1).getDay();
        let lastDay = new Date(currYear, currMonth + 1, 0).getDate();
        let lastDayLastMonth = new Date(currYear, currMonth, 0).getDate();
        let liTag = [];
        for(let i = firstDay; i > 0; i--){
            liTag.push(<li key = {i + "in"} className ='inactive'>${lastDayLastMonth - i + 1}</li>);
        }

        for(let i = 1; i <= lastDay; i++){
            let today = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
            liTag.push(<li key = {i} className ="${today}">{i}</li>);
        }
        return( liTag.map(liTag =>(liTag)));
        
        
    }


    
    return(
        <div className='body'>
            <div className='wrapper'>
                <header>
                    <p className = 'current-date'>{months[currMonth]} {currYear}</p>
                    <div className='icons'>
                        <span id ='prev' >< HiChevronLeft /></span>
                        <span id ='next' >< HiChevronRight /></span>
                    </div>
                </header>
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
                    {currDate()}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Planner;
