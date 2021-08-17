import React from 'react'
import Carousel from "../components/HomeCarousel/carousel"

// Components

function Home() {

    console.log(localStorage.getItem('sessionEmail'))
    let x;
    console.log(localStorage.getItem('symbol'));
    console.log(x)

    return (
        <div className = "home">
            <div className = "home-heading">
            <h1>THIS IS PROOF</h1>
            </div>
            <div className = "home-content">
                {/* <Carousel /> */}
                {localStorage.getItem('sessionEmail') ? `Welcome back, ${localStorage.getItem('userfRealName')}` : <div>
                <p>We believe that when a woman of color wins, we all win. <br/>
                In that spirit, we partner with WOC  entrepreneurs and allied brands to create dope shit that furthers the culture. Instead of a finite list of services, we have three disciplines we work with: User Experience, Brand, and Content. No limits.<br/>
                Have an idea, question, or just wanna chat? <a href= "/form">Hit us up!</a><br/>
                Check out <a href= "https://www.nanankweti.com/" target="_blank" rel="noopener noreferrer">our most recent work</a></p> </div>}
            </div>
        </div>
    )
}

export default Home