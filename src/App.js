import './App.css';
import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



export default class App extends Component {
 
  render() {
    return (
      <div>
        <Router>
     <Navbar/>
    <LoadingBar
        color='#f11946'
        progress={10}
        
      />
    <Routes>
    <Route exact path="/business" element={
      <div className='container'>
      <News key='business' pageSize={6} country="us" category="business"/>
      </div>
    }>
    </Route>
    <Route exact path="/entertainment" element={
      <div className='container'>
    <News key='entertainment' pageSize={6} country="us" category="entertainment"/>
      </div>
    }>
    </Route>
    <Route exact path="/general" element={
      <div className='container'>
    <News key='general' pageSize={6} country="us" category="general"/>
      </div>
    }>
    </Route>
    <Route exact path="/health" element={
      <div className='container'>
    <News key='health' pageSize={6} country="us" category="health"/>
      </div>
    }>
    </Route>
    <Route exact path="/science" element={
      <div className='container'>
    <News key='science' pageSize={6} country="us" category="science"/>
      </div>
    }>
    </Route>
    <Route exact path="/sports" element={
      <div className='container'>
    <News key='sports' pageSize={6} country="us" category="sports"/>
      </div>
    }>
    </Route>
    <Route exact path="/technology" element={
      <div className='container'>
    <News key='technology' pageSize={6} country="us" category="technology"/>
      </div>
    }>
    </Route>

    </Routes>
    </Router>
    </div>
    )
  }
}

