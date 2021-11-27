import React, {useState} from 'react'
import CommentBox from '../components/CommentBox'
import ProjectBox from '../components/project'
import ProgressTracker from '../components/StatusTracker/progressTracker'

const Client = (props) =>{
    const done = "70";
        return(
            <div>
                <h1> Client Page </h1>
                < ProgressTracker done ={done}/>
                <div className="comment-box">
                <CommentBox />
                </div>
                <div className="project-box">
                <ProjectBox />
                </div>
            </div>
        )
    }
    
export default Client