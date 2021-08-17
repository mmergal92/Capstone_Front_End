import React, { Component , useState} from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

function ProgressTracker ({ done }) {

  // let checkStatus =  (arr) => {
  //   let arrayofStatus = []
    
  //   for(let i = 0; i < arr.length; i++){
  //     if(arr[i].check === status){
  //       if(arr[i].type === "in progress"){
  //         arrayofStatus.push(1)
  //       } else if(arr[i].type === 'dislike'){
  //         arrayofStatus.push(2)
  //       } else if(arr[i].type === 'dislike'){
  //         arrayofStatus.push(3)
  //       } else if(arr[i].type === 'dislike'){
  //         arrayofStatus.push(4)
  //       } else if(arr[i].type === 'dislike'){
  //         arrayofStatus.push(5)
  //       }
  //       }
  //     if(arr[i] === arrayofStatus){
  //       console.log('checking')
  //       return true
  //       }

  //     }
  //   }
    const [style, setStyle] = useState('');

    // const finished ={
    //   "Not Started": "0%",
    //   "In Progress": "24%",
    //   "Needs Review": "50%",
    //   "Under Review": "75%",
    //   "Completed": "100%",
    // }

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${ done }%`
        }
        setStyle(newStyle);
    }, 1000);
      return (
        <div className="progress-tracker">
        <label className="progress-tracker__label">Progress Tracker</label>
        <div className="progress-tracker__percentage">
          { done }%
        </div>
        </div>
      )
  }
  
  export default ProgressTracker;