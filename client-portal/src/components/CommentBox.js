import { getByDisplayValue } from '@testing-library/react';
import React, {useDebugValue, useEffect, useState} from 'react'
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
    const [showEdit, setShowEdit] = useState(false)
    const [showContent, setShowContent] = useState(true)
    const [idEdit, setIdEdit] = useState('')
    const [username, setUsername] = useState('');
    const [change, setChange] = useState(true)
    const [editComment, setEditComment] = useState(comment)
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
    const onToggle = (response) => {
        console.log(response)
        setShowEdit(!showEdit)
        setShowContent(!showContent)
        setIdEdit(response.id)
    }
    const getNewList = async() => {
        const postURL = "https://proof-backend.herokuapp.com/" + "user/"
        const response = await fetch (postURL)
        const data = await response.json()
        // console.log(data)
        setNewList(data);
        // console.log(data.id)
    }
    const handleDelete= async(value)=>{
        const URL = "https://proof-backend.herokuapp.com/" + "user/"
        console.log(value)
        console.log(URL)
        // console.log(tempArray[0].comment)
        const remove = await fetch (URL + "/" + value._id, {
            method: 'DELETE',
        })
        console.log(value._id)
    }
    const handleEdit= async(e)=>{
        e.preventDefault()
        console.log(e)
        const URL = "https://proof-backend.herokuapp.com/" + "user/"
        console.log(URL + e._id)
        console.log(e.target)
        // console.log(response.target.value)
        // console.log(tempArray[0].comment)
        await fetch (URL + editComment._id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                comment: comment,
            })
        })
        console.log("Did this work?")
        // const tempArray = newList;
        tempArray.push(e)
        setNewList(tempArray)
        setChange(!change);
    }

    const handleSubmit = async(response) =>{
        console.log(response)
        const postURL = "https://proof-backend.herokuapp.com/" + "user/" 
        console.log(postURL)
        await fetch (postURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                date: new Date(Date.now()).toLocaleString(),
                comment: comment,
                profilepic: localStorage.getItem('ProfileImg'),
                username: localStorage.getItem('userfRealName')
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
                <h3>thoughts and ideas</h3> 
                <table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Comment</th>
                        <th>Username</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newList.map((value, index) => {
                        return(
                                <tr key={index}> 
                                    <td>{value.date}</td>  
                                    <td>{value.comment}</td>  
                                    <td className = "user"><img src={value.profilepic} alt="" />{value.username}</td>
                                    <td>{localStorage.getItem('userfRealName') === value.username ? <button onClick={() => handleDelete(value)}>DELETE</button> : ''}{localStorage.getItem('userfRealName') === value.username ? <button onClick={onToggle}>EDIT</button> : ''} </td>
                                    </tr>
                        )})}
                    </tbody>
                    </table>
                <br/>
                </div>
                {/* {showContent && */}
                <div className = "new-comments">
                    <h3>Add a comment,<b> {localStorage.getItem('userfRealName')}</b>:</h3>
                    <form>
                    <label>
                    <textarea className = "comment_input" value = {comment} onChange = {commentChange} placeholder = "New Comment"/>
                    </label><br/>
                    <button onClick= {handleSubmit}>Submit</button>
                    </form>
                </div>
                 {/* } */}
                {showEdit &&
                <div className = "edit-comments">
                <h3>Edit your Comment:</h3>
                 <form className = "edit" onSubmit={handleEdit}>
                    <textarea className = "edit-input" value = {comment} onChange = {commentChange} placeholder = "Edit Comment"/>
                    <br/>
                    <input className="update" type = "submit" value="Update" />
                 </form>
                 </div>
                }
            </div>
        )
    }
    const loading =()=>{
        return <h1>Loading ...</h1>
    }
    return newList ? loaded(): loading();
}
export default CommentBox