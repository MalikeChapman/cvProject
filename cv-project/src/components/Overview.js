import React, {Component} from "react";

export class Overview extends Component{
    constructor(props){
        super(props)
        this.state = {
            overview: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        
    }
    

    render(){
        return(<div className="overviewdiv">
            <h3 className="divtitle">Objective</h3>
            
                <textarea placeholder="Enter Objective Description here" 
                className="overviewobjective" required onChange={this.handleOnChange}
                value={this.state.overview}
                minLength={100} maxLength={300}></textarea>
        </div>)
    }
    handleOnChange(event){
        this.setState({overview: event.target.value});
        this.props.getOverview(event.target.value);
    }
}
