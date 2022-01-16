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

export default class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (<div className="main">
      <Header/>
      <Overview/>
      <Education/>
      <WorkHistory/>
      <Certifications/>
      <PersonalSkill/>
      <button>Generate</button>
    </div>)
  }
}



