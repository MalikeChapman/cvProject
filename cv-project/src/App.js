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

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      overview: '',
      education: [],
      workhistory: [],
      certifications: [],
      personal: []
    }
  }
  render(){
    return (<div className="main">
      <Header/>
     <Form/>
      <button id="generatebtn">Generate</button>
    </div>)
  }
}



