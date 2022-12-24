import React from 'react';
import './planner.css';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Planner = () => {
    return(
        <div className='body'>
            <div className='wrapper'>
                <header>
                    <p className = 'current-date'> December 2022 </p>
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
                        <li>28</li>
                        <li>29</li>
                        <li>30</li>
                        <li>31</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                        <li>19</li>
                        <li>20</li>
                        <li>21</li>
                        <li>22</li>
                        <li>23</li>
                        <li>24</li>
                        <li>25</li>
                        <li>26</li>
                        <li>27</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Planner;
