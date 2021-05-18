import React from 'react';

function ImageSection() {
    return (
        <div className='ImageSection'>
            {/* <div className="img">
                <img src={about} alt=""/>
            </div> */}
            <div className="about-info">
                <h4>I am<span> Kyle</span></h4>
                <p className="about-text">
                A software engineer deeply rooted in problem solving and tackling immense challenges. 
                A strong love for knowledge in software, electronics, automation and stack development.  
                Currently focusing on writing full stack applications leveraging python, FastAPI, React and Ionic!.
                </p>
                <form action="https://web.tresorit.com/l/SOGsK#JEKxrXrY8JH5bOL9MZLl2w" method="get" target="_blank">
                    <button className="btn">Download CV</button>
                </form>
            </div> 
        </div>
    )
}

export default ImageSection;
