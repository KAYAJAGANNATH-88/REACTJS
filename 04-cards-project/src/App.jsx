import React from 'react'
import Cards from './components/Cards.jsx'
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    posted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    posted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    posted: "2 days ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    posted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    posted: "4 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    posted: "6 days ago",
    post: "Data Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$78/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    posted: "2 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Palo Alto, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    posted: "3 days ago",
    post: "AI Research Scientist",
    tag1: "Full-time",
    tag2: "Expert Level",
    pay: "$100/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.XDxTk0xxRfEKu_2iIkMx0QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Adobe",
    posted: "1 day ago",
    post: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/intel.com",
    companyName: "Intel",
    posted: "5 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Hillsboro, USA"
  }
];

  return (
    <>
    
    <div className="parent">
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Cards logo={elem.brandLogo} company={elem.companyName} posted={elem.posted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
          </div>
      })}
    </div>
  
</>
  )
}

export default App
