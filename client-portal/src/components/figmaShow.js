import React, { useState, useEffect } from 'react';

function FigmaShowComponent () {
    const imageList = [{
        "url" : "test",
        "name" : "Sample"
    }]
    const GetURL = "https://proof-backend.herokuapp.com/figma/frames"
    const [showFigma, setShowFigma] = useState(false);
    const [imageShow, setImageShow] = useState(imageList)
    const toggle = () =>{
        setShowFigma(!showFigma)
    }

    const images = async() =>{
        const response = await fetch (GetURL)
        const data = await response.json()
        console.log(data)
        setImageShow(data);
        // console.log(imageShow)
    }
    useEffect(() =>{
        images();
    })
    const loaded = () =>{
        return (
        <div>
            <h4><button onClick = {toggle}>Figma Component</button></h4>
            {showFigma &&
                <div className="figma-show">
                    <label className="figma-show_label">Current Files</label>
                    <div className="figma-show_page">
                    <div className= "show-figmafiles">
                        {imageShow.map((value, index) =>{
                        return(
                            <tr key={index}>
                                <td><img src={value.url} /></td>
                            </tr>
                        )
                    })}
                    </div>
                    </div>
                </div>
            }
        </div>
      )
  }
  const loading =()=>{
    return <h1>Loading ...</h1>
}
return imageShow ? loaded(): loading();
}
  
export default FigmaShowComponent;