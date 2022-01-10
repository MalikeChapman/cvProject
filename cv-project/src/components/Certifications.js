import React, {Component} from "react";

export class Certifications extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div className="certificationdiv">
            <h3 className="divtitle">Certifications</h3>
            <button className="addbtn">add</button>
        </div>)
    }
}