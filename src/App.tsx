import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import About from './Components/about/About';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import Portfolio from './Components/portfolio/Portfolio';

const axios = require('axios').default;

export interface resumeData {
  main: main[],
  resume: resume[],
  portfolio: portfolio[]
}

export interface project {
  title: string,
  category: string,
  image: string,
  url: string,
  tech: string[],
  git: string
}

export interface portfolio {
  projects: project[],
}

export interface edu {
  school: string,
  degree: string,
  graduated: string,
  description: string[]
}

export interface work {
  company: string,
  title: string,
  years: string,
  tech: string[],
  description: string,
}

export interface skill {
  name: string
}

export interface resume {
  skillmessage: string,
  education: edu[],
  work: work[],
  skills: skill[]
}
export interface addr {
  city: string,
}
export interface social {
  name: string,
  url: string,
  className: string
}

export interface main {
  name: string,
  occupation: string,
  description: string,
  image: string,
  bio: string,
  contactmessage: string,
  email: string,
  phone: string,
  address: addr[],
  website: string,
  resumedownload: string,
  social: social[],
}


const App = () => {

  const [data, setData] = useState<resumeData>();

  useEffect(() => {
    axios.get('/resumeData.json')
      .then((res: any) => {
        console.log(res)
        setData((currentData) => res.data)
      })
      .catch((err: Error) => console.log(err))

    // setData(res)
  }, [])
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     foo: 'bar',
  //     resumeData: {}
  //   };

  //   ReactGA.initialize('UA-110570651-1');
  //   ReactGA.pageview(window.location.pathname);

  // }


  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Footer />
      <button onClick={() => console.log(data)}>resumedata</button>
    </>
  );
}

export default App;
