
import './App.css';
import Navbar from './components/Navbar';
import React,{ Component} from 'react';
import News from './components/News';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



export default class App extends Component{
  render(){
    return(
      <>
     
        
        <Router>
        <Navbar/>
        <Routes>
          <Route exact  path="/" element={<Home/>}/>
          <Route exact path="/News" element={<News key="general" country="in" category="politics" />}/>
          <Route exact path="/newsIndia" element={<News key="general" country="in" category="general"/>}/>
          <Route exact path="/newsUs" element={<News key="general" country="us" category="general"/>}/>
          <Route exact path="/businessNews" element={<News key="business" country="in" category="business" />}/>
          <Route exact path="/sportsNews" element={<News key="sports" country="in" category="sports" />}/>
          <Route exact path="/healthNews" element={<News key="health" country="in" category="health"/>}/>
          <Route exact path="/techNews" element={<News key="technology" country="in" category="technology"/>}/>
          <Route exact path="/science" element={<News key="science" country="in" category="science"/>}/>
          </Routes>
        </Router>
          
      </>
    )
  }
}
