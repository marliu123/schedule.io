import React from 'react';
import './planner.css';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Planner = () => {
    const currentDate = document.querySelector(".current-date");
    const daysTag = document.querySelector(".days")
    let date = new Date();
    let currYear = date.getFullYear();
    let currMonth = date.getMonth();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currDate = () =>{
        let lastDay = new Date(currYear, currMonth + 1, 0).getDate();
        let liTag = '';
        for(let i = 1; i <= lastDay; i++){
            liTag += `<li>${i}</li>`;
        }


        currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
        daysTag.innerHTML = liTag;
    }

    currDate();
    

    return(
        <div className='body'>
            <div className='wrapper'>
                <header>
                    <p className = 'current-date'></p>
                    <div className='icons'>
                        <span>< HiChevronLeft /></span>
                        <span>< HiChevronRight /></span>
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
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Planner;
