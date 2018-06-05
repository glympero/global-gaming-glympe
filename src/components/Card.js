import React from 'react';
import { Link } from 'react-router-dom';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            day: '',
            date: '',
            month: '',
            year: '',
            hours: '',
            minutes: '',
            sec: '',
            isMounted: false
        }
        let refreshIntervalId;
    }

    getDay = (d) => {
        let day = d.getDay();
        let dayarr =["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        day = dayarr[day];
        return day;
    }

    getDate = (d) => {
        return d.getDate();
    }

    getMonth = (d) => {
        let month = d.getMonth();
        let montharr =["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
        month = montharr[month];
        return month;
    }

    getYear = (d) => {
        return  d.getFullYear();
    }

    getHours = (d) => {
        return d.getHours();
    }

    getMinutes = (d) => {
        if(d.getMinutes() < 10){
            return `0${d.getMinutes()}`;
        }
        return `${d.getMinutes()}`;
    }

    getSeconds = (d) => {
        if(d.getSeconds() < 10){
            return `0${d.getSeconds()}`;
        }
        return d.getSeconds();
    }
    clock = () => {
        const d = new Date();
        this.setState(() => ({
            day: this.getDay(d),
            date: this.getDate(d),
            month: this.getMonth(d),
            year: this.getYear(d),
            hours: this.getHours(d),
            minutes: this.getMinutes(d),
            sec: this.getSeconds(d)
        }));
      }

      componentDidMount =() => {
        this.refreshIntervalId = setInterval(this.clock, 1000);
      }

    componentWillUnmount = () => {
        clearInterval(this.refreshIntervalId);
    }

    render() {
        return (
            <div className="blog-card spring-fever">
                <Link to='/movies'>
                    <div className="title-content">
                        <h2>Movies List</h2>
                        <hr />
                        <div className="intro">Click Here For Movies List</div>
                    </div>
                    <div className="card-info">Show Movies</div>
                    <div className="utility-info">
                        <ul className="utility-list">
                            <li className="date">{this.state.day} {this.state.date} {this.state.month} {this.state.year}</li>
                            {this.state.hours && <li className="comments">{this.state.hours} : {this.state.minutes} : {this.state.sec}</li>}
                        </ul>
                    </div>
                    <div className="gradient-overlay"></div>
                     <div className="color-overlay"></div>
                </Link>
            </div>
            
        );
    }
};

export default Clock;