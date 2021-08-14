import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function CommentBox() {

    const userCommentlist = [{
        date: "June 12, 2021",
        comment: "It will go up",
        username: "testuser"
    }]
    //STATES
    const [newList, setNewList] = useState(userCommentlist)
    // const [date, setDate] = useState('');
    const [comment, setComment] = useState('');
    const [username, setUsername] = useState('');
    const [change, setChange] = useState(true)
    const tempArray = newList;
    //HANDLES
    const commentChange = (event) =>{
        console.log("Adding text of comment")
        setComment(event.target.value)
    };
    // const usernameChange = (event) =>{
    //     console.log("Adding text of username")
    //     setUsername(event.target.value)
    // };
    const handleDelete= async(value)=>{
        const URL = "https://proof-backend.herokuapp.com/" + "user/"
        console.log(URL)
        // console.log(tempArray[0].comment)
        const remove = await fetch (URL + "/" + value._id, {
            method: 'DELETE',
        })
        console.log(value._id)
    }
    const getNewList = async() => {
        const postURL = "https://proof-backend.herokuapp.com/" + "user/"
        const response = await fetch (postURL)
        const data = await response.json()
        // console.log(data)
        setNewList(data);
        // console.log(data.id)
    }
    const handleSubmit = (response) =>{
        console.log(response)
        const postURL = "https://proof-backend.herokuapp.com/" + "user/" 
        console.log(postURL)
        fetch (postURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                date: new Date(Date.now()).toLocaleString(),
                comment: comment,
                username: username,
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
            <div className = "comments">
                <div className = "existing-comments">
                <h3>Thoughts and Ideas:</h3> 
                <table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Comment</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newList.map((value, index) => {
                        return(
                                <tr key={index}> 
                                    <td>{value.date}</td>  
                                    <td>{value.comment}</td>  
                                    <td><button onClick={() => handleDelete(value)}>DELETE</button></td>
                                    </tr>
                        )})}
                    </tbody>
                    </table>
                <br/>
                </div>
                <div className = "new-comments">
                    <h3>Add a new Comment:</h3>
                    <form>
                    <label>
                    <p className="textcomment">
                    {/* Commenting as: */}
                    <br />
                    </p>
                    <textarea className = "comment_input" value = {comment} onChange = {commentChange} placeholder = "New Comment"/>
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
export default CommentBox