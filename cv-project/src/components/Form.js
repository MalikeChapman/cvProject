import React, {Component} from "react";
import { Overview } from "./Overview";
import '../App.css'
import { Education } from "./Education";

export class Form extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            numOfEducation: 0,
            numOfJobs: 0,
            job: [],
            education: [],
            name: ""
        }
        this.addEducation = this.addEducation.bind(this);
        this.addJob = this.addJob.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }
    render()
    {
        const educations = [];
        for(let i = 0; i < this.state.numOfEducation; i++)
        {
            educations.push(<Education key={i} number={i + 1}/>);
        }
        const jobs = [];
        return (
        <form className="mainform" onSubmit={this.handleFormSubmit} onChange={this.handleFormChange}>
            <Overview/>
            <div className="ed">
            <button className="addbtn" onClick={this.addEducation}>add</button>
            </div>
            <div>
            
            {educations}
            </div>     
                   
            
            
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