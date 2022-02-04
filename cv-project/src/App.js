import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Overview } from './components/Overview';
import { WorkHistory } from './components/WorkHistory';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { PersonalInfo } from './components/PersonalInfo';
import { PersonalSkill } from './components/PersonalSkill';
import { Form } from './components/Form';
import { Resume } from './components/Resume';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      overview: '',
      childData: null,
      showResume: false
    }
    this.updateValues = this.updateValues.bind(this);
  }
  render(){
    const {data} = this.state;
    return (<div className="main">
      <Header/>
     <Form parentState={this.updateValues}/>
     {this.state.showResume && <Resume stateProps={this.state.childData}/>}
    </div>)
  }
  updateValues(data)
  {
    console.log(JSON.stringify(data) + " ok");
    this.setState({
      childData: data,
      showResume: true
    })
  }
}



