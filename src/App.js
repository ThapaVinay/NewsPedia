import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import Demo from './components/Demo';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Footer from './components/Footer';

const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;  // we need to set the environment variable to acces this key form there

  const [progress, setProgress] = useState(0);

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
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
            <Route exact path="/demo" element={<Demo setProgress={setProgress} pageSize={pageSize}/>} />
          </Routes>
          <Footer/>
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