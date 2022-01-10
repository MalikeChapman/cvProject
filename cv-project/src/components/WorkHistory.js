import React, {Component} from "react";

export class WorkHistory extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div className="workhistorydiv">
            <h3 className="divtitle">Experience</h3>
            <button className="addbtn">add</button>
        </div>)
    }
}