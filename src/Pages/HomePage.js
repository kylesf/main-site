import React from 'react'
import {faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Kyle </span> ✌️
                </h1>
                <p className="h-sub-text">
                A software engineer and an entrepreneur deeply rooted in problem solving and tackling immense challenges. Currently focusing on writing Python and Go code for Backend and CloudOps.
                </p>
                <div className="icons">
                    <a href='https://www.linkedin.com/in/kylestewartfrantz/' className="icon-holder" >
                        <FontAwesomeIcon icon={faLinkedin} className="icon fb"/>    
                    </a>
                    <a href='https://www.github.com/kylesf/' className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>    
                    </a>
                    <a href='https://instagram.com/theclearicecompany/' className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon yt"/>    
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage
