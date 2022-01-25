import React, {Component} from "react";
import { render, hydrate } from "react-dom";

export class Education extends Component{
    constructor(props){
        super(props)
        
        
        this.state = {
            key: this.props.key,
            work: `${"Education " + this.props.number}`,
            school: '',
            educationlvl: ``,
            startDate: '',
            endDate: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.deleteEdu = this.deleteEdu.bind(this);
    }
    handleChange(event)
    {
        // console.log(event.target.id);
        switch(event.target.id)
        {
            case "schoolName":
                {
                    this.setState({
                        school: event.target.value
                    })
                    break;
                }
            
            case "educationAchieved":
                {
                    this.setState({
                        educationlvl: event.target.value
                    })
                    
                    break;
                }
                case "startDate":
                    {
                       this.setState({
                           startDate: event.target.value
                       }) 
                       break;
                    }
                    case "endDate":
                        {
                            this.setState({
                                endDate: event.target.value
                            })
                            break;
                        }
                default:
                    {
                        alert("Nothing changed")
                        break;
                    }
        }
    }
    deleteEdu()
    {
        this.props.eduDelete(this.state.key);
    }
    render(){
        return(
            <div className="educationdiv" >
                <h3 className="divtitle">{this.state.work}</h3>
                <input type="text" placeholder="School Name" required className="eduinput" id="schoolName" onChange={this.handleChange}></input>
                <select name="education" id="educationAchieved" 
                placeholder="Please select highest Education achieved" 
                className="eduinput"required onChange={this.handleChange}>
                    <option value="Less than High School">Less than High School</option>
                    <option value="High School Diploma or Equivalent">High School Diploma or Equivalent</option>
                    <option value="Some college, no degree">Some college, no degree</option>
                    <option value="Associates">Associates</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="Masters">Masters</option>
                    <option value="PhD">PhD</option>
                    <option value="Doctorate">Doctorate</option>
                </select>
                <label htmlFor="start" className="edulabel">Start Date: </label>
                <input type="month" id="startDate" name="start" required className="eduinput" onChange={this.handleChange}></input>
                <label htmlFor="end" className="edulabel">End Date:</label>
                <input type="month" name="end" id="endDate" className="eduinput" onChange={this.handleChange}></input>
                <button id="eduDelete" onClick={this.deleteEdu}>Delete</button>
            </div>
        )
    }
}