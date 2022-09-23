import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import About from './Components/about/About';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import Contact from './Components/contact/Contact'
import Portfolio from './Components/portfolio/Portfolio';
import { resumeData } from './interfaces';
import HeaderSocials from './Components/HeaderSocials/HeaderSocials';
import Experience from './Components/experience/Experience';

import resdata from '../src/resumeData.json'

// cant use axios get for local file?
// const axios = require('axios').default;

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<resumeData | any>(resdata);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // useEffect(() => {
  //   axios.get('/resumeData.json')
  //     .then((res: any) => {
  //       console.log(res)
  //       setData((currentData) => res.data)
  //     })
  //     .catch((err: Error) => console.log(err))
  // }, [])

  
  return (
    <>
    
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
    <div className="loader-container2">
      
    </div>
      <Header data={data}/>
      <HeaderSocials />
      <Nav />
      <About data={data}/>
      <Experience skillsfront={data.resume.skillsfront} skillsback={data.resume.skillsback} skillsother={data.resume.skillsother}/>
      <Portfolio projects={data.portfolio.projects}/>
      <Contact />
      <Footer />
      {/* <button onClick={() => console.log(data)}>resumedata</button> */}
    </>
  );
}

export default App;
