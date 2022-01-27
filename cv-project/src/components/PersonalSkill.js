import React, {Component} from "react";
import { PersonalInfo } from "./PersonalInfo";

export class PersonalSkill extends Component{
    constructor(props){
        super(props)
        this.state = {
            key: this.props.key,
            numOfSkills: 0,
            skill: ""

        }
        this.handleChange = this.handleChange.bind(this);
        this.deleteSkill = this.deleteSkill.bind(this);
        
    }
    handleChange(event)
    {
        switch(event.target.id)
        {
            case "skillsid":
            {
                this.setState({
                    skill: event.target.value
                })
                break;
            }
            default:
                break;
        }
    }
  
    render(){
       
        return(
        <div className="personalskill">
                        <input type="text" id="skillsid" placeholder="Enter Skill here" onChange={this.handleChange}></input>
                        <button id="deleteSkillBtn" onClick={this.deleteSkill}>Delete skill</button>
        </div>)
    }
    deleteSkill()
    {
        this.props.skillRemove(this.state.key);
    }
}