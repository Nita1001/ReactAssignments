import React, { Component } from "react";
import classes from './Time.module.css';

class Time extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: '',
            minutes: '',
            hours: '',
        };
    }

    handleSecondsChange = (event) => {
        const seconds = parseInt(event.target.value);
        const minutes = (seconds / 60);
        const hours = parseFloat((minutes / 60)).toFixed(5);
        this.setState({
            seconds: seconds,
            minutes: minutes,
            hours: hours,
        });
    };
    handleMinutesChange = (event) => {
        const minutes = parseInt(event.target.value);
        const seconds = parseInt(minutes * 60);
        const hours = parseFloat((minutes / 60));
        this.setState({
            seconds: seconds,
            minutes: minutes,
            hours: hours,
        });
    };
    handleHoursChange = (event) => {
        const hours = parseFloat(event.target.value);
        const minutes = (hours * 60);
        const seconds = (minutes * 60);
        this.setState({
            seconds: seconds,
            minutes: minutes,
            hours: hours,
        });
    };

    handleKeyDown = (event) => {
        if (event.key === "Delete") {
            this.setState({
                seconds: '',
                minutes: '',
                hours: '',
            });
        }
    }

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.labelContainer}>
                    <label>Seconds:</label>
                    <label>Minutes:</label>
                    <label>Hours:</label>
                </div>
                <div className={classes.labelContainer}>
                    <input type="number" value={this.state.seconds} onChange={this.handleSecondsChange} onKeyDown={this.handleKeyDown} />
                    <input type="number" value={this.state.minutes} onChange={this.handleMinutesChange} onKeyDown={this.handleKeyDown} />
                    <input type="number" value={this.state.hours} onChange={this.handleHoursChange} onKeyDown={this.handleKeyDown} />
                </div >
            </div>
        );
    }
}

export default Time;