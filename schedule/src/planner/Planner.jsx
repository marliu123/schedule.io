import React from 'react';
import './planner.css';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Planner = () => {
    const currentDate = document.querySelector(".current-date");
    const daysTag = document.querySelector(".days")
    const prevNextIcon = document.querySelectorAll(".icons span");

    let date = new Date();
    let currYear = date.getFullYear();
    let currMonth = date.getMonth();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currDate = () =>{
        let firstDay = new Date(currYear, currMonth, 1).getDay();
        let lastDay = new Date(currYear, currMonth + 1, 0).getDate();
        let lastDayLastMonth = new Date(currYear, currMonth, 0).getDate();
        let liTag = '';
        for(let i = firstDay; i > 0; i--){
            liTag += `<li class ='inactive'>${lastDayLastMonth - i + 1}</li>`;
        }

        for(let i = 1; i <= lastDay; i++){
            let today = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
            liTag += `<li class ="${today}">${i}</li>`;
        }

        currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
        daysTag.innerHTML = liTag;
    }

    currDate();
    
    prevNextIcon.forEach(icon => {
        icon.addEventListener("click", () => {
            if(icon.id === 'prev'){
                currMonth -= 1;
            } else{
                currMonth += 1;
            }
            if(currMonth < 0 || currMonth > 11){
                date = new Date(currYear, currMonth);
                currYear = date.getFullYear();
                currMonth = date.getMonth();
            } else{
                date = new Date();
            }
            currDate();
        });
    });

    return(
        <div className='body'>
            <div className='wrapper'>
                <header>
                    <p className = 'current-date'></p>
                    <div className='icons'>
                        <span id ='prev'>< HiChevronLeft /></span>
                        <span id ='next'>< HiChevronRight /></span>
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
