import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import SkillsSection from '../Components/SkillsSection'
// import ServicesSection from '../Components/ServicesSection'
// import intelligence from '../img/intelligence.svg';
// import design from '../img/design.svg'
// import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'Skills'} span={'Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Python'} progress={"90%"}/>
                <SkillsSection skill={'Golang'} progress={"60%"}/>
                <SkillsSection skill={'Javascript'} progress={"55%"}/>
                <SkillsSection skill={'React'} progress={"40%"}/>
                <SkillsSection skill={'NextJS'} progress={"30%"}/>
                <SkillsSection skill={'C/C++'} progress={"50%"}/>
                <SkillsSection skill={'Docker'} progress={"80%"}/>
                <SkillsSection skill={'Postgres'} progress={"80%"}/>
                <SkillsSection skill={'Terraform'} progress={"70%"}/>
            </div>
            {/* <Title title={'Services'} span={'Services'} /> */}
            {/* <div className="services-container">
                <ServicesSection image={design} title={'Privacy'} 
                text={'?'}
                />
                <ServicesSection image={intelligence} title={'Design'} 
                text={'?'}
                />
                <ServicesSection image={gamedev} title={'Programming'} 
                text={'?'}
                />                
            </div> */}

        </div>
    )
}

export default AboutPage
