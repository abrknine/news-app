import './App.css';
import React, { useState }  from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
// require('dotenv').config();
// console.log(process.env);
 

const App=()=> {
  const pageSize=5;
  const apiKey = process.env.API_KEY 
  const[progress, setProgress]=useState(0);
  
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
      <News /*apiKey={apikey}*/ setProgress={setProgress} key='business' pageSize={6} country="us" category="business"/>
      </div>
    }>
    </Route>
    <Route exact path="/entertainment" element={
      <div className='container'>
    <News /*apiKey={apikey}*/ setProgress={setProgress} key='entertainment' pageSize={6} country="us" category="entertainment"/>
      </div>
    }>
    </Route>
    <Route exact path="/general" element={
      <div className='container'>
    <News /*apiKey={apikey}*/ setProgress={setProgress} key='general' pageSize={6} country="us" category="general"/>
      </div>
    }>
    </Route>
    <Route exact path="/health" element={
      <div className='container'>
    <News /*apiKey={apikey}*/ setProgress={setProgress} key='health' pageSize={6} country="us" category="health"/>
      </div>
    }>
    </Route>
    <Route exact path="/science" element={
      <div className='container'>
    <News /*apiKey={apikey}*/ setProgress={setProgress} key='science' pageSize={6} country="us" category="science"/>
      </div> 
    }>
    </Route>
    <Route exact path="/sports" element={
      <div className='container'>
    <News /*apiKey={apikey}*/ setProgress={setProgress} key='sports' pageSize={6} country="us" category="sports"/>
      </div>
    }>
    </Route>
    <Route exact path="/technology" element={
      <div className='container'>
    <News /*apiKey={apikey}*/ setProgress={setProgress} key='technology' pageSize={6} country="us" category="technology"/>
      </div>
    }>
    </Route>

    </Routes>
    </Router>
    </div>
    )
  }


export default App;