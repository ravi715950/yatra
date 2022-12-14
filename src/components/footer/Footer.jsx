import './Footer.css'
import React from 'react'

function Footer() {
  return (
    <div className="footer">
        <div className="top">
            <div>
        <h1>Yatra</h1>
        <p>Choose Your Favourite Destination</p>
        </div>
        <div>
            <a href="/">
                <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-youtube-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-twitter-square"></i>
            </a>
        </div>
        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
                <a href="/">link</a>
            </div>
        </div>
        <div className="madeby"><p>Made With <i class="fa-solid fa-heart"></i> by Ravindra Raghav</p></div>
    </div>
  )
}

export default Footer