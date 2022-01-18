import React, {Component} from "react";
import { render, hydrate } from "react-dom";

export class Education extends Component{
    constructor(props){
        super(props)
        
        
        this.state = {
            key: this.props.key,
            work: `${"Education Experience " + this.props.number}`
        }
    }
    render(){
        return(
            <div className="educationdiv" >
                <h3 className="divtitle">{this.state.work}</h3>
                <input type="text" placeholder="School Name" required></input>
                <input type="date" placeholder="start date" required></input>
                <input type="date" placeholder="end date"></input>
            </div>
        )
    }
}