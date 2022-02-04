import React, {Component} from 'react';
import "../resume.css";
import "../App.css";

export class Resume extends Component
{
    constructor(props)
    {
        super(props)
        
        
    }
    render()
    {
       const name = `${this.props.stateProps.personal.fname} ${this.props.stateProps.personal.lname}`
        console.log(this.props);
        const phone = this.props.stateProps.personal.phone;
        const email = this.props.stateProps.personal.email;
        const skill = [];
        console.log(this.props.stateProps.skill[0].props);
        this.props.stateProps.skill.forEach((item, index) => {
            skill.push(<li key={index} classname="listitem">{item}</li>);
        });

        return(
        <div className="resume">
            <div className="resumepersonaldiv">
                <h1 className="personalname">{name}</h1>
                <div className="resumepersonalinfo">
                    <h3 className="subsection">Personal Info</h3>
                    <ul className="listholder">
                        <li key={1} classname="listitem">Phone</li>
                        <li key={2} classname="listitem">{phone}</li>
                        <li key={3} classname="listitem">Email</li>
                        <li key={4} classname="listitem">{email}</li>
                    </ul>
                </div>
                <div className="resumeskilldiv">
                    <ul className="listholder">
                        {skill}
                    </ul>
                </div>
            </div>
            <div className="resumeoverviewdiv">
                <p id="overview">{this.props.stateProps.overview}</p>
            </div>
            <div className="resumeeducationdiv"></div>
            <div className="resumeworkhistorydiv"></div>
        </div>)
    }
}