import './App.css';
import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
   pageSize=5;
   apiKey=process.env.REACT_APP_NEWS_API  
   state={ 
    progress:0
   }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <Router>
     <Navbar/>
    <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}
         
      />
    <Routes>
    <Route exact path="/business" element={
      <div className='container'>
      <News apiKey={this.apikey} setProgress={this.setProgress} key='business' pageSize={6} country="us" category="business"/>
      </div>
    }>
    </Route>
    <Route exact path="/entertainment" element={
      <div className='container'>
    <News apiKey={this.apikey} setProgress={this.setProgress} key='entertainment' pageSize={6} country="us" category="entertainment"/>
      </div>
    }>
    </Route>
    <Route exact path="/general" element={
      <div className='container'>
    <News apiKey={this.apikey} setProgress={this.setProgress} key='general' pageSize={6} country="us" category="general"/>
      </div>
    }>
    </Route>
    <Route exact path="/health" element={
      <div className='container'>
    <News apiKey={this.apikey} setProgress={this.setProgress} key='health' pageSize={6} country="us" category="health"/>
      </div>
    }>
    </Route>
    <Route exact path="/science" element={
      <div className='container'>
    <News apiKey={this.apikey} setProgress={this.setProgress} key='science' pageSize={6} country="us" category="science"/>
      </div> 
    }>
    </Route>
    <Route exact path="/sports" element={
      <div className='container'>
    <News apiKey={this.apikey} setProgress={this.setProgress} key='sports' pageSize={6} country="us" category="sports"/>
      </div>
    }>
    </Route>
    <Route exact path="/technology" element={
      <div className='container'>
    <News apiKey={this.apikey} setProgress={this.setProgress} key='technology' pageSize={6} country="us" category="technology"/>
      </div>
    }>
    </Route>

    </Routes>
    </Router>
    </div>
    )
  }
}

