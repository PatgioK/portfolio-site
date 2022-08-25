import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import About from './Components/about/About';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import Portfolio from './Components/portfolio/Portfolio';
import { resumeData } from './interfaces';

const axios = require('axios').default;


const App = () => {

  const [data, setData] = useState<resumeData>();

  useEffect(() => {
    axios.get('/resumeData.json')
      .then((res: any) => {
        console.log(res)
        setData((currentData) => res.data)
      })
      .catch((err: Error) => console.log(err))
  }, [])

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Footer />
      {/* <button onClick={() => console.log(data)}>resumedata</button> */}
    </>
  );
}

export default App;
