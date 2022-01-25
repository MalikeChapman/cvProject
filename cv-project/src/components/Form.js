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
            job: [],
            education: [],
            name: ""
        }
        this.addEducation = this.addEducation.bind(this);
        this.addJob = this.addJob.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
        this.deleteJob = this.deleteJob.bind(this);
    }
    render()
    {
        const educations = [];
        for(let i = 0; i < this.state.numOfEducation; i++)
        {
            educations.push(<Education key={i} number={i + 1} eduDelete = {this.deleteEducation}/>);
        }
        const educationStyle = {
            borderBottom: "1px solid black",
            width: "100%",
            position: "relative",
            marginTop: "2rem",
            maxHeight: "30vh",
            overflowY: "auto"
        }
        const jobs = [];
        for(let i = 0; i < this.state.numOfJobs; i++)
        {
            jobs.push(<WorkHistory key={i} number={i + 1} jobDelete={this.deleteJob}/>);
        }
        return (
        <form className="mainform" onSubmit={this.handleFormSubmit} onChange={this.handleFormChange}>
            <Overview/>
            <div className="ed">
            <button className="addbtn" onClick={this.addEducation}>add</button>
            </div>
            <div style={educationStyle}>
            {educations}
            </div>   
            <div className="ed">
            <button className="addbtn" id="addJob" onClick={this.addJob}>add</button>
            </div>  
            <div style={educationStyle}>
                {jobs}
            </div>
            <PersonalInfo/>
        </form>)
    }
    addJob()
    {
        this.setState({
            numOfJobs: this.state.numOfJobs + 1
        })
    }
    addEducation(item)
    {
        this.setState({
            numOfEducation: this.state.numOfEducation + 1
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
}