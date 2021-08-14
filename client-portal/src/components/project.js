import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Option } from "./dropdown";

function ProjectBox() {

    const ProjectList = [{
        title: "online store 2",
        client: "Spirit Shop Again",
        status: "In Progress",
        dateUploaded: "08/03/2021",
        dueDate: "09/21/2021",
        clientToDo: ["add products to list", "finalize copy", "approve layouts"],
        username: "testclient3",
        onTrack: false, 
        approved: false,
        Notes: "test notes",
        version: 2, 
    }]
    //STATES
    const [newList, setNewList] = useState(ProjectList)
    const [title, setTitle] = useState('');
    const [client, setClient] = useState('');
    const [status, setStatus] = useState('');
    const [onTrack, setOnTrack] = useState(true);
    const [approved, setApproved] = useState(true);
    const [Notes, setNotes] = useState('');
    const [username, setUsername] = useState('');
    const [change, setChange] = useState(true)
    const tempArray = newList;
    //HANDLES
    const notesChange = (event) =>{
        console.log("Adding text of comment")
        setNotes(event.target.value)
    };
    const titleChange = (event) =>{
        console.log("Adding text of title")
        setTitle(event.target.value)
    };
    const clientChange = (event) =>{
        console.log("Adding text of client")
        setClient(event.target.value)
    };
    const statusChange = (event) =>{
        console.log("Adding text of status")
        setStatus(event.target.value)
    };
    // const onTrackChange = (event) =>{
    //     console.log("Adding text on track")
    //     setOnTrack(event.target.value)
    // };
    // const approvedChange = (event) =>{
    //     console.log("Adding text of approved")
    //     setApproved(event.target.value)
    // };
    const usernameChange = (event) =>{
        console.log("Adding text of username")
        setUsername(event.target.value)
    };
    const handleDelete= async(value)=>{
        const URL = "https://proof-backend.herokuapp.com/" + "projects/"
        console.log(URL)
        // console.log(tempArray[0].comment)
        const remove = await fetch (URL + "/" + value._id, {
            method: 'DELETE',
        })
        console.log(value._id)
    }
    const getNewList = async() => {
        const postURL = "https://proof-backend.herokuapp.com/" + "projects/"
        const response = await fetch (postURL)
        const data = await response.json()
        // console.log(data)
        setNewList(data);
        // console.log(data.id)
    }
    const handleSubmit = (response) =>{
        console.log(response)
        const postURL = "https://proof-backend.herokuapp.com/" + "projects/" 
        console.log(postURL)
        fetch (postURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                title: title,
                client: client,
                status: status,
                dateUploaded: new Date(Date.now()).toLocaleString(),
                username: username,
                Notes: Notes,
            })
        })
        console.log("Did this work?")
        // const tempArray = newList;
        tempArray.push(response)
        setNewList(tempArray)
        setChange(!change);
    }
    React.useEffect(()=>{
        getNewList();
    })
    const loaded = () =>{
        return (
            <div className = "project">
                <div className = "existing-projects">
                <h3>Here is the tracker for your project</h3> 
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>client</th>
                        <th>status</th>
                        <th>dateUploaded</th>
                        <th>username</th>
                        <th>Notes</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newList.map((value, index) => {
                        return(
                                <tr key={index}> 
                                    <td>{value.title}</td>  
                                    <td>{value.client}</td>  
                                    <td>{value.status}</td>  
                                    <td>{value.dateUploaded}</td> 
                                    <td>{value.username}</td>  
                                    <td>{value.Notes}</td> 
                                    <td><button onClick={() => handleDelete(value)}>DELETE</button></td>
                                    </tr>
                        )})}
                    </tbody>
                    </table>
                <br/>
                </div>
                <div className = "new-projects">
                <h3>Add a new Project:</h3>
                <form>
                    <label>
                    <p className="project-text">
                    Commenting as:
                    <br />
                    </p>
                    Title: 
                    <input type = "text" className = "title_input" value = {title} onChange = {titleChange} placeholder = "New Project Title"/>
                    Client:
                    <input type = "text" className = "client_input" value = {client} onChange = {clientChange} placeholder = "New Project client"/>
                    Status:
                    <div>
      <Dropdown
        formLabel=""
        buttonText="Update"
        action="/client">
        <Option selected value="STATUS" />
        <Option value="Not Started" />
        <Option value="In Progress" />
        <Option value="Needs Review" />
        <Option value="Under Review" />
        <Option value="Done" />
      </Dropdown>
    </div>
                    <input type="status" className = "status_input" value = {status} onChange = {statusChange} placeholder = "New Project status"/>
                    <textarea className = "notes_input" value = {Notes} onChange = {notesChange} placeholder = "New Project Notes"/>
                    </label><br/>
                    <button onClick= {handleSubmit}>Submit</button>
                </form>
                </div>
            </div>
        )
    }
    const loading =()=>{
        return <h1>Loading ...</h1>
    }
    return newList ? loaded(): loading();
}
export default ProjectBox