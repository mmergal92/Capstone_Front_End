import React, { useState } from 'react'

function Form() {

    const inquirylist = [{
        name: "Test Name 2",
        email: "test@gmail.com",
        phone: "917-123-4567",
        website_url: "www.google.com",
        business_name: "Test Company",
        business_services: "We specialize in selling herbal remedies.",
        services_interest: "We're looking for branding and web design services",
        timeline_project: "We'd like to have this done in 3 months.",
        start_date: "2021-08-06",
        decisions: 1,
    }]
    const [newInquiry, setNewInquiry] = useState(inquirylist)
    const [showContent, setShowContent] = useState(true)
    const [showResponse, setShowResponse] = useState(false)
    const onToggle = (response) => {
        console.log(response)
        setShowContent(!showContent)
        setShowResponse(!showResponse)
    }
    const tempArray = newInquiry;
    const [change, setChange] = useState(true)
    const [name, setName] = useState('');
    const nameChange = (event) =>{
        console.log("Adding name")
        setName(event.target.value)
    };
    const [email, setEmail] = useState('');
    const emailChange = (event) =>{
        console.log("Adding email")
        setEmail(event.target.value)
    };
    const [phone, setPhone] = useState('');
    const phoneChange = (event) =>{
        console.log("Adding phone")
        setPhone(event.target.value)
    };
    const [website_url, setWebsite_url] = useState('');
    const website_urlChange = (event) =>{
        console.log("Adding web")
        setWebsite_url(event.target.value)
    };
    const [business_name, setBusiness_name] = useState('');
    const business_nameChange = (event) =>{
        console.log("Adding business name")
        setBusiness_name(event.target.value)
    };
    const [business_services, setBusiness_services] = useState('');
    const business_servicesChange = (event) =>{
        console.log("Adding services")
        setBusiness_services(event.target.value)
    };
    const [services_interest, setServices_interest] = useState('');
    const services_interestChange = (event) =>{
        console.log("Adding services")
        setServices_interest(event.target.value)
    };
    const [timeline_project, setTimeline_project] = useState('');
    const timeline_projectChange = (event) =>{
        console.log("Adding timeline")
        setTimeline_project(event.target.value)
    };
    const [start_date, setStart_date] = useState('');
    const start_dateChange = (event) =>{
        console.log("Adding date")
        setStart_date(event.target.value)
    };
    const [decisions, setDecisions] = useState('');
    const decisionsChange = (event) =>{
        console.log("Adding decision people number")
        setDecisions(event.target.value)
    };
   
    const getNewInquiry = async() => {
        const postURL = "https://proof-backend.herokuapp.com/inquiry/" 
        const response = await fetch (postURL)
        const data = await response.json()
        console.log(data)
        setNewInquiry(data);
        console.log(data.id)
    }
    const handleSubmit = async(response) =>{
        console.log(response)
        const postURL = "https://proof-backend.herokuapp.com/inquiry/" 
        console.log(postURL)
        await fetch (postURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                name: name,
                email: email,
                phone: phone,
                website_url: website_url,
                business_name: business_name,
                business_services: business_services,
                services_interest: services_interest,
                timeline_project: timeline_project,
                start_date: start_date,
                decisions: decisions,
            })
        })
        console.log("Did this work?")
        tempArray.push(response)
        setNewInquiry(tempArray)
        setChange(!change);
    }

    React.useEffect(()=>{
        getNewInquiry();
    })

    // const loaded =() =>{
    return (
        <>
        {showContent && 
        <div className = "form">
        <form>
            <label htmlFor="name">Name</label>
            <br/><input type="text" className="form-control" value = {name} onChange = {nameChange} placeholder = "Your Name"/>
            <br/><label htmlFor="email">Email address</label>
            <br/><input type="email" className="form-control" value = {email} onChange = {emailChange} placeholder = "Email" />
            <br/><label htmlFor="phone">Phone Number</label>
            <br/><input type="phone" className="form-control" value = {phone} onChange = {phoneChange} placeholder = "Phone Number" />
            <br/><label htmlFor="website_url">Website</label>
            <br/><input type="text" className="form-control" value = {website_url} onChange = {website_urlChange} placeholder = "Business website" />
            <br/><label htmlFor="bname">Business Name</label>
            <br/><input type="text" className="form-control" value = {business_name} onChange = {business_nameChange} placeholder = "Business name" />
            <br/><label htmlFor="bservices">Business Services/products</label>
            <br/><input type="text" className="form-control" value = {business_services} onChange = {business_servicesChange} placeholder = "List of some services or products your business provides" />
            <br/><label htmlFor="proj-timeline">Estimated Project Timeline</label>
            <br/><input type="text" className="form-control" value = {timeline_project} onChange = {timeline_projectChange} placeholder = "What is your timeline for this project?" />
            <br/><label htmlFor="start-date">Estimated Start Date </label>
            <br/><input type="text" className="form-control" value = {start_date} onChange = {start_dateChange} placeholder = "What is your start date?" />
            <br/><label htmlFor="decisions">Decision Makers</label>
            <br/><input type="number" className="form-control" value = {decisions} onChange = {decisionsChange} placeholder = "How many people are decision makers throughout our process?" />
            <br/><label htmlFor="binterest">Interest in our Services</label>
            <br/><textarea rows="5" className="form-control" value = {services_interest} onChange = {services_interestChange} placeholder = "Which of our services are you interested in? (ex: Branding, web design, etc.) Please expand on any notes here." />
            <br/><button className="submit" onClick= {handleSubmit} onClick={onToggle}>Submit</button>
        </form>
        </div>
        }
        {showResponse && 
        <div>
            <h4>Thank you for submitting this form. <br/> We will get back to you within 2 business days.</h4>
        </div>
    }
        </>
    )
    // }
    // const loading =()=>{
    //     return <h1>Loading ...</h1>
    // }
    // return newInquiry ? loaded(): loading();
}

export default Form
