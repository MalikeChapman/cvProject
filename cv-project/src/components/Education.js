import React, {Component} from "react";

export class Education extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="educationdiv">
                <h3 className="divtitle">Education</h3>
                <button className="addbtn">add</button>
            </div>
        )
    }
}