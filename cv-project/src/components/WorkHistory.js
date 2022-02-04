import React, {Component} from "react";

export class WorkHistory extends Component{
    constructor(props){
        super(props)
        this.state = {
            key: this.props.key,
            number: this.props.number,
            company: ``,
            title: ``,
            workStart: ``,
            workEnd: ``,
            bulletArray: []
        }
        this.deleteJob = this.deleteJob.bind(this);
        this.addBullet = this.addBullet.bind(this);
        this.bulletRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }
    addBullet(event)
    {
        this.setState({
            bulletArray: this.state.bulletArray.concat(this.bulletRef.current.value),
            
        })
       this.bulletRef.current.value = '';
    }
    handleChange(event)
    {
        switch(event.target.id)
        {
            case "companyid":
                {
                    this.setState(
                        {
                            company: event.target.value
                        }
                    )
                    break;
                }
            case "positionid":
                    {
                        this.setState(
                            {
                                title: event.target.value
                            }
                        )
                        break;
                    }
            case "workStart":
                        {
                            this.setState(
                                {
                                    workStart: event.target.value
                                }
                            )
                            break;
                        }
            case "workEnd":
                {
                    this.setState(
                        {
                            workEnd: event.target.value
                        }
                    )
                    break;
                }
            default:
                break;
        }
    }
    deleteJob()
    {
        this.props.jobDelete(this.state.key);
    }
    render(){
        return(<div className="workhistorydiv">
            <h3 className="divtitle">{`Experience ${this.state.number}`}</h3>
            <input type="text" className="workinput" placeholder="Company Name"
            id="companyid" required onChange={this.handleChange}></input>
            <input type="text" className="workinput" placeholder="Position/Title"
            id="positionid" required onChange={this.handleChange}></input>
            <label htmlFor="start" className="worklabel">Start Date:</label>
            <input type="month" className="workinput" id="workStart" name="start" required onChange={this.handleChange}></input>
            <label htmlFor="end" className="worklabel">End Date:</label>
            <input type="month" className="workinput" id="workEnd" name="end" required onChange={this.handleChange}></input>
            <input type="text" className="workinput" id="bulletid" placeholder="Add work duties here" ref={this.bulletRef}></input>
            <button id="addBulletBtn" onClick={this.addBullet} >Add Work Duty</button>
            <button id="jobDelete" onClick={this.deleteJob}>Delete</button>
        </div>)
    }
}