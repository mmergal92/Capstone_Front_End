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
            <h1>Welcome to this app</h1>
            </div>
            <div className = "home-content">
                {/* <Carousel /> */}
                {localStorage.getItem('sessionEmail') ? `Welcome back, ${localStorage.getItem('userfRealName')}` : <p>Please <strong>Login</strong> to access all the features of this site.</p>}
            </div>
        </div>
    )
}

export default Home