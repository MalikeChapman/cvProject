import React, {Component} from "react";

export class PersonalInfo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(<div className="personaldiv" id="personaldiv">
            
            <form className="personalform" id="personalform">
                <label htmlFor="fnameid" className="personallabel">First Name:</label>
                <input type="text" id="fnameid" className="personalforminput"></input>
                <label htmlFor="lnameid" className="personallabel">Last Name:</label>
                <input type="text" id="lnameid" className="personalforminput"></input>
                <label htmlFor="emailid" className="personallabel">Email:</label>
                <input type="email" id="emailid" className="personalforminput"></input>
                <label htmlFor="phoneid" className="personallabel">Phone Number:</label>
                <input type="tel" id="phoneid" className="personalforminput"></input>
              

            </form>
        </div>)
    }
}