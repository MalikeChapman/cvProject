import React, {Component} from "react";
import { Overview } from "./Overview";
import '../App.css'
import { Education } from "./Education";
import { WorkHistory } from "./WorkHistory";
import { PersonalInfo } from "./PersonalInfo";
import { PersonalSkill } from "./PersonalSkill";

export class Form extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            numOfEducation: 1,
            numOfJobs: 1,
            job: [<WorkHistory key={0} number={1} jobDelete={this.deleteJob}/>],
            education: [<Education key={0} number={1} eduDelete = {this.deleteEducation}/>],
            name: "",
            skill: [<PersonalSkill key ={0} skillRemove={this.skillDelete}/>],
            numOfSkills: 1
        }
        this.addEducation = this.addEducation.bind(this);
        this.addJob = this.addJob.bind(this);
        this.addSkill = this.addSkill.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
        this.deleteJob = this.deleteJob.bind(this);
        this.skillDelete = this.skillDelete.bind(this);
        this.generateResume = this.generateResume.bind(this);
    }
    render()
    {
        const educationStyle = {
            borderBottom: "1px solid black",
            width: "100%",
            position: "relative",
            marginTop: "2rem",
            maxHeight: "30vh",
            overflowY: "auto"
        }
        return (
        <form className="mainform" onSubmit={this.handleFormSubmit} onChange={this.handleFormChange}>
            <Overview/>
            <div className="ed">
            <button className="addbtn" onClick={this.addEducation}>add</button>
            </div>
            <div style={educationStyle}>
            {this.state.education}
            </div>   
            <div className="ed">
            <button className="addbtn" id="addJob" onClick={this.addJob}>add</button>
            </div>  
            <div style={educationStyle}>
                {this.state.job}
            </div>
            <div className="ed">
                <button className="addbtn" id="addSkill" onClick={this.addSkill}>add</button>
            </div>
            <div className="personalContainer">
            <PersonalInfo/>
            <div className="skilldiv">
                {this.state.skill}
            </div>
            </div>
            <input type="submit" className="submitBtn" onClick={this.generateResume}></input>
        </form>)
    }
    addJob()
    {
        this.setState({
            numOfJobs: this.state.numOfJobs + 1,
            job: this.state.job.concat(<WorkHistory key={this.state.numOfJobs} number={this.state.numOfJobs + 1} jobDelete={this.deleteJob}/>)
        })
    }
    addEducation(item)
    {
        this.setState({
            numOfEducation: this.state.numOfEducation + 1,
            education: this.state.education.concat(<Education key={this.state.numOfEducation} number={this.state.numOfEducation + 1} eduDelete = {this.deleteEducation}/>)
        })
    }
    deleteEducation(index)
    {
        this.setState({
            education: this.state.education.splice(index, 1),
            numOfEducation: this.state.numOfEducation - 1
        })
    }
    deleteJob(index)
    {
        this.setState({
            jobs: this.state.job.splice(index, 1),
            numOfJobs: this.state.numOfJobs - 1
        })
    }
    handleFormSubmit(event)
    {
        event.preventDefault();
        
    }
    handleFormChange(event)
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    addSkill()
    {
        this.setState(
            {
                numOfSkills: this.state.numOfSkills + 1,
                skill: this.state.skill.concat(<PersonalSkill key={this.state.numOfSkills} skillRemove={this.skillDelete}/>)
            }
        )
    }
    skillDelete(index)
    {
        this.setState({
            skills: this.state.skill.splice(index, 1),
            numOfSkills: this.state.numOfSkills - 1
        })

    }
    generateResume()
    {
        console.log(this.state.skill);
        console.log(this.state.job);
        console.log(this.state.education);

    }
}