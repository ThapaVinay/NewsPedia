import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import Demo from './components/Demo';
import Footer from './components/Footer';
import About from './components/About';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;  // we need to set the environment variable to acces this key form there

  const [progress, setProgress] = useState(0);
// document.body.style =  'background : grey'
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/NewsPedia" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/NewsPedia/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/NewsPedia/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/NewsPedia/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/NewsPedia/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path="/NewsPedia/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/NewsPedia/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
          <Route exact path="/NewsPedia/demo" element={<Demo setProgress={setProgress} pageSize={pageSize} />} />
          <Route exact path="/NewsPedia/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}



export default App;






// Methods in react component lifecycle ->
// 1. render()
// 2. componentDidMount()
// 3. componentDidUpdate()
// 4. componentWillUnmount()


// Hooks: hooks allow you to use different features of class based components in functional based components
// allows to use use state and other react features without writing a class
// useState, useEffect, useContext, 