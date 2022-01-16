import React, {Component} from "react";
import { render, hydrate } from "react-dom";

export class Education extends Component{
    constructor(props){
        super(props)
        
        this.educationRef = React.createRef();
        this.addNewEducation = this.addNewEducation.bind(this);
        this.state = {
            edDif: this.educationRef.current
        }
    }
    render(){
        return(
            <div className="educationdiv" ref={this.educationRef}>
                <h3 className="divtitle">Education</h3>
                <button className="addbtn" onClick={this.addNewEducation}>add</button>
            </div>
        )
    }
    componentDidMount(){
        this.addNewEducation();
    }
    addNewEducation(){
        const edDif1 = this.state.edDif;
        let newForm = (<div className="edformdiv">
            <form className="edform">
                <input type="text" placeholder="School Name" required></input>
                <input type="date" placeholder="start date" required></input>
                <input type="date" placeholder="end date"></input>
            </form>
        </div>)
       this.setState({
           edDif: this.educationRef.current.append(newForm)
       }) 
        
    }
}