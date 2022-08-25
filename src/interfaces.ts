
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
  