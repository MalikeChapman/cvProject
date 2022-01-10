import React, {Component} from "react";

export class Overview extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div className="overviewdiv">
            <h3 className="divtitle">Objective</h3>
            <form className="overviewform">
                <textarea placeholder="Enter Objective Description here" 
                className="overviewobjective" ></textarea>
            </form>
        </div>)
    }
}