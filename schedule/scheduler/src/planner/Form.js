import React from 'react';
import './event.css';

var task = [];

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = 
        {location: '',
         startTime: '',
         endTime: '',
         startDate: '',
         endDate: '',
        };
    }
    

    handleLocationChange = (event) => {
        this.setState({location: event.target.value});
    }
  
    handleStartTime = (event) => {
        this.setState({startTime: event.target.value})
    }

    handleEndTime = (event) => {
        this.setState({endTime: event.target.value})
    }

    handleRecurring = (event) => {
        this.setState({recurring: event.target.value})
    }

    handleStartDate = (event) => {
        this.setState({startDate: event.target.value})
    }

    handleEndDate = (event) => {
        this.setState({endDate: event.target.value})
    }

    addEvent = () => {
        task.push(this.state.location, this.state.startTime, this.state.endTime, this.state.recurring, this.state.startDate, this.state.endDate);
        console.log(task[0]);
    }

    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                Location: 
                <input type = "text" value = {this.state.location} onChange = {this.handleLocationChange}></input>
                </label>
                <br />
                <label>
                Start Time: 
                <input type = "text" value = {this.state.startTime} onChange = {this.handleStartTime}></input>
                </label>
                <br />
                <label>
                End Time: 
                <input type = "text" value = {this.state.endTime} onChange = {this.handleEndTime}></input>
                </label>
                <br />
                <label>
                Recurring:
                <div>
                    <label>
                        <input type = "radio" value = 'yes' checked={this.state.recurring === 'yes'} onChange = {this.handleRecurring} /> Yes 
                    </label>
                    <label>
                        <input type = "radio" value = 'no' checked={this.state.recurring === 'no'} onChange = {this.handleRecurring} /> No 
                    </label>
                </div>
                </label>
                <label>
                Start Date: 
                <input type = "text" value = {this.state.startDate} onChange = {this.handleStartDate}></input>
                </label>
                <br />
                <label>
                End Date: 
                <input type = "text" value = {this.state.endDate} onChange = {this.handleEndDate}></input>
                </label>
                <br />
                <label></label>
                <br />
                <input type = "submit" value = "Submit" onClick={this.addEvent}/>
            </form>
        );
    }
}

export default Form;
