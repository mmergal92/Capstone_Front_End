import React, {useState} from 'react'
import CommentBox from '../components/CommentBox'
import ProjectBox from '../components/project'

const Client = (props) =>{
        return(
            <div>
                <h1> Client Page </h1>
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