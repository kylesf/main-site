import React from 'react';
import about from '../img/chip.jpg'

function ImageSection() {
    return (
        <div className='ImageSection'>
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Kyle</span></h4>
                <p className="about-text">
                A software engineer deeply rooted in problem solving and tackling immense challenges. 
                A strong love for knowledge in software, electronics, automation and stack development.  
                Currently focusing on writing clean and tested Python code for Backend and CloudOps.
                </p>
                <form action="https://web.tresorit.com/l/ZjBdU#mX8jULQsQtDB2kb5kDvHWg" method="get" target="_blank">
                    <button className="btn">Download CV</button>
                </form>
            </div> 
        </div>
    )
}

export default ImageSection;
