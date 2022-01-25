import React, {Component} from "react";
import { PersonalInfo } from "./PersonalInfo";

export class PersonalSkill extends Component{
    constructor(props){
        super(props)
        this.state = {
            numOfSkills: 0,
            skills: [],
            skill: ""

        }
        this.ul = React.createRef();
        this.skillnode = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.addSkillToList = this.addSkillToList.bind(this);
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
    addSkillToList()
    {
        
        this.setState(
            {
               numOfSkills: this.state.numOfSkills + 1,
                skills: this.state.skills.push(this.state.skill),
                skill: ""
            }
        )
    }
    render(){
        const skills = [];
        for(let i = 0; i < this.state.numOfSkills; i++)
        {
            skills.push(<li key={i}>{this.state.skill}</li>)
        }
        return(
        <div className="personalskill">
                        <input type="text" id="skillsid" placeholder="Enter Skill here" ref={this.skillnode}></input>
                        <button id="" onClick={this.addSkillToList}>add skill</button>
                        <ul className="listholder" ref={this.ul}>
                            {skills}
                </ul>
        </div>)
    }
}