import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import About from './Components/about/About';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import Contact from './Components/contact/Contact'
import Portfolio from './Components/portfolio/Portfolio';
import { resumeData } from './interfaces';
import HeaderSocials from './Components/HeaderSocials/HeaderSocials';
import resdata from '../src/resumeData.json'
const axios = require('axios').default;


const App = () => {

  const [data, setData] = useState<resumeData | any>(resdata);

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
      <Header data={data}/>
      <HeaderSocials />
      <Nav />
      <About data={data}/>
      <Portfolio />
      <Contact />
      <Footer />
      {/* <button onClick={() => console.log(data)}>resumedata</button> */}
    </>
  );
}

export default App;
