import React from 'react'
import ContactItem from '../Components/ContactItem'
import Title from '../Components/Title'
import phone from '../img/phone.svg'
import email from '../img/emailme.svg'
import location from '../img/location.svg'
import cali from '../img/cali.jpg'

function ContactPage() {
    return (
        <div>
             <div className="title">
                <Title title={'Contact'} span={'Contact'} />
            </div>
            <div className='ContactPage'>
                <div className="map-sect">
                        <img src={cali} alt=""/>
                    </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={"***-***-****"} title={"Phone Number"}/>
                    <ContactItem icon={location} text1={"Bay Area"}  title={"Location"}/>
                    <ContactItem icon={email} text1={"kyle @ byteword . net"}  title={"Email"}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
