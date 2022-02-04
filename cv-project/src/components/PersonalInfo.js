import React, {Component} from "react";
import { PersonalSkill } from "./PersonalSkill";

export class PersonalInfo extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    render(){
        return(
        <div className="personaldiv" id="personaldiv">
            <h3 className="divtitle">Personal Information</h3>
            <div>
            <label htmlFor="fnameid" className="personallabel">First Name:</label>
                <input type="text" id="fnameid" className="personalforminput" required onChange={this.handleChange}></input>
                <label htmlFor="lnameid" className="personallabel">Last Name:</label>
                <input type="text" id="lnameid" className="personalforminput" required onChange={this.handleChange}></input>
                <label htmlFor="emailid" className="personallabel">Email:</label>
                <input type="email" id="emailid" className="personalforminput" required onChange={this.handleChange}></input>
                <label htmlFor="phoneid" className="personallabel">Phone Number:</label>
                <input type="tel" id="phoneid" className="personalforminput" required onChange={this.handleChange}></input>
            </div>
        </div>)
    }
    handleChange(event)
    {
        this.props.valueChange(event);
    }
}