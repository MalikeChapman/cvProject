import React, {Component} from "react";
import { PersonalInfo } from "./PersonalInfo";

export class PersonalSkill extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div className="personalskill">
            <h3 className="divtitle">Personal Information</h3>
            <PersonalInfo/>
            <div className="skills">
                <form className="skillsform">
                    <label htmlFor="skillsid"></label>
                        <input type="text" id="skillsid"></input>
                        <button>add skill</button>
                        <textarea className="listholder">
                   
                </textarea>
                </form >
                
                
            </div>
        </div>)
    }
}