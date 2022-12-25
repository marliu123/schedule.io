import React from 'react';
import './planner.css';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

let date = new Date();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Planner extends React.Component{
    state = {
    currYear: date.getFullYear(),
    currMonth: date.getMonth()
     
    }
    
    currDate = () =>{
        let firstDay = new Date(this.state.currYear, this.state.currMonth, 1).getDay();
        let lastDay = new Date(this.state.currYear, this.state.currMonth + 1, 0).getDate();
        let lastDayLastMonth = new Date(this.state.currYear, this.state.currMonth, 0).getDate();
        let liTag = [];
        for(let i = firstDay; i > 0; i--){
            liTag.push(<li key = {i + "in"} className ='inactive'>${lastDayLastMonth - i + 1}</li>);
        }

        for(let i = 1; i <= lastDay; i++){
            let today = i === date.getDate() && this.state.currMonth === new Date().getMonth() && this.state.currYear === new Date().getFullYear() ? "active" : "";
            liTag.push(<li key = {i} className ="${today}">{i}</li>);
        }
        return( liTag.map(liTag =>(liTag)));
        
        
    }
    
    
    decrease = () =>{   
        this.state.currMonth -= 1;
        if(this.state.currMonth < 0 || this.state.currMonth > 11){
            date = new Date(this.state.currYear, this.state.currMonth);
            this.state.currYear = date.getFullYear();
            this.state.currMonth = date.getMonth();
        } else{
            date = new Date();
        }
         return currDate();
        };

    increase = () =>{   
        this.state.currMonth += 1;
        if(this.state.currMonth < 0 || this.state.currMonth > 11){
            date = new Date(this.state.currYear, this.state.currMonth);
            this.state.currYear = date.getFullYear();
            this.state.currMonth = date.getMonth();
        } else{
            date = new Date();
        }
        return currDate();
        };    
    render(){
    return(
        <div className='body'>
            <div className='wrapper'>
                <header>
                    <p className = 'current-date'>{months[this.state.currMonth]} {this.state.currYear}</p>
                    <div className='icons'>
                        <span id ='prev' onClick={() => decrease()}>< HiChevronLeft /></span>
                        <span id ='next' onClick={() => increase()}>< HiChevronRight /></span>
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
}
export default Planner;