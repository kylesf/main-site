import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import SkillsSection from '../Components/SkillsSection'

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'Skills'} span={'Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Python'} progress={"95%"}/>
                <SkillsSection skill={'React'} progress={"70%"}/>
                <SkillsSection skill={'Javascript'} progress={"85%"}/>
                <SkillsSection skill={'Typescript'} progress={"60%"}/>
                <SkillsSection skill={'FastAPI'} progress={"65%"}/>
                <SkillsSection skill={'Cloudflare Workers'} progress={"85%"}/>
                <SkillsSection skill={'Docker'} progress={"80%"}/>
                <SkillsSection skill={'PostgreSQL'} progress={"80%"}/>
                <SkillsSection skill={'Terraform'} progress={"70%"}/>
            </div>
        </div>
    )
}

export default AboutPage
