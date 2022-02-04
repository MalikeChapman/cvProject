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
            maxJobs: 5,
            maxSkills: 10,
            maxEducation: 3,
            numOfEducation: 0,
            numOfJobs: 0,
            job: [],
            education: [],
            name: "",
            skill: [],
            numOfSkills: 1,
            overview: "",
            personal: {
                fname: "",
                lname: "",
                email: "",
                phone: ""
            }
        }
        this.onTrigger = (event) =>
        {
            this.props.parentSate();
            const data = {
                job: this.state.job,
                education: this.state.education,
                skill: this.state.skill,
                overview: this.state.overview  
              }
              console.log(data + " form");
              this.props.parentState(data);
      
            event.preventDefault();
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
        this.getOverview = this.getOverview.bind(this);
        this.onTrigger = this.onTrigger.bind(this);
        this.updatepersonal = this.updatepersonal.bind(this);
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
            <Overview getOverview={this.getOverview}/>
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
            <PersonalInfo valueChange={this.updatepersonal}/>
            <div className="skilldiv">
                {this.state.skill}
            </div>
            </div>
            <input type="submit" className="submitBtn" onClick={this.generateResume}></input>
        </form>)
    }
    getOverview(text)
    {
        this.setState(
            {
                overview: text
            }
        )
    }
    addJob()
    {
        if(this.state.numOfJobs >= this.state.maxJobs)
        {
            alert(`You can only put ${this.state.maxJobs} jobs max!`);
            return;
        }
        this.setState({
            numOfJobs: this.state.numOfJobs + 1,
            job: this.state.job.concat(<WorkHistory key={this.state.numOfJobs} number={this.state.numOfJobs + 1} jobDelete={this.deleteJob}/>)
        })
    }
    addEducation(item)
    {
        if(this.state.numOfEducation >= this.state.maxEducation)
        {
            alert(`You can only put ${this.state.maxEducation} educations max!`);
            return;
        }
        this.setState({
            numOfEducation: this.state.numOfEducation + 1,
            education: this.state.education.concat(<Education key={this.state.numOfEducation} number={this.state.numOfEducation + 1} eduDelete = {this.deleteEducation}/>)
        })
    }
    deleteEducation(index)
    {
        
        const newArray = Array.from(this.state.education);
        newArray.splice(index, 1);

        this.setState({
            education: newArray,
            numOfEducation: this.state.numOfEducation - 1
        })
    }
    deleteJob(index)
    {
        const newArray = Array.from(this.state.job);
        newArray.splice(index, 1);

        this.setState({
            job: newArray,
            numOfJobs: this.state.numOfJobs - 1
        })
    }

    handleFormSubmit(event)
    {
        const data = {
            job: this.state.job,
            education: this.state.education,
            skill: this.state.skill,
            overview: this.state.overview,
            personal: this.state.personal  
          }
          console.log(data + " form");
          this.props.parentState(data);
  
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
        if(this.state.numOfSkills >= this.state.maxSkills)
        {
            alert(`You can only put ${this.state.maxSkills} skills max!`);
        }
        this.setState(
            {
                numOfSkills: this.state.numOfSkills + 1,
                skill: this.state.skill.concat(<PersonalSkill key={this.state.numOfSkills} skillRemove={this.skillDelete} value={""}/>)
            }
        )
    }
    skillDelete(index)
    {
        const newArray = Array.from(this.state.skill);
        newArray.splice(index, 1);
        this.setState({
            skills: newArray,
            numOfSkills: this.state.numOfSkills - 1
        })

    }
    updatepersonal(event)
    {
        switch(event.target.id)
        {
            case "fnameid":
                {
                    const personal = { ...this.state.personal, fname: event.target.value}
                    this.setState(
                        {
                            personal: personal
                        }
                    )
                    break;
                }
            case "lnameid":
                {
                    const personal = { ...this.state.personal, lname: event.target.value}
                    this.setState(
                        {
                            personal: personal
                        }
                    )

                    break;
                }
            case "emailid":
                {
                    const personal = { ...this.state.personal, email: event.target.value}
                    this.setState(
                        {
                            personal: personal
                        }
                    )

                    break;
                }
                case "phoneid":
                    {
                        const personal = { ...this.state.personal, phone: event.target.value}
                        this.setState(
                            {
                                personal: personal
                            }
                        )
    
                        break;
                    }
            default:
        }
    }
    generateResume()
    {
        
    }
}