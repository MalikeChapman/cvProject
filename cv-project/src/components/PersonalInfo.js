import React, {Component} from "react";
import { PersonalSkill } from "./PersonalSkill";

export class PersonalInfo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className="personaldiv" id="personaldiv">
            <h3 className="divtitle">Personal Information</h3>
            <div>
            <label htmlFor="fnameid" className="personallabel">First Name:</label>
                <input type="text" id="fnameid" className="personalforminput" required></input>
                <label htmlFor="lnameid" className="personallabel">Last Name:</label>
                <input type="text" id="lnameid" className="personalforminput" required></input>
                <label htmlFor="emailid" className="personallabel">Email:</label>
                <input type="email" id="emailid" className="personalforminput" required></input>
                <label htmlFor="phoneid" className="personallabel">Phone Number:</label>
                <input type="tel" id="phoneid" className="personalforminput" required></input>
            </div>
                <div>
                    <PersonalSkill/>
                </div>
        </div>)
    }
}