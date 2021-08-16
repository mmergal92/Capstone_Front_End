import React, {useState} from 'react'
import CommentBox from '../components/CommentBox'
import ProjectBox from '../components/project'
import ProgressTracker from '../components/StatusTracker/progressTracker'

const Client = (props) =>{
        return(
            <div>
                <h1> Client Page </h1>
                < ProgressTracker done ="70"/>
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