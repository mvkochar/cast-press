import React from 'react'
import './css/Contact.css'

const Contact = () => {
  return (
    <>
        <main className='contact-main'>
            <h1 className="contact-main-title">Contact</h1>
            <p className="contact-main-desc">Love to hear your thoughts, fears & feelings...</p>
            <form action="" className='contact-main-fm'>
                <div className="input-bl">
                    <label htmlFor="contactName">Name*</label>
                    <input type="text" name='contactName' id='contactName' placeholder='Enter your name' />
                </div>
                <div className="input-bl">
                    <label htmlFor="contactEmail">Email*</label>
                    <input type="email" name='contactEmail' id='contactEmail' placeholder='Enter your email' />
                </div>
                <div className="msg-bl">
                    <label htmlFor="contactMsg">Message</label>
                    <textarea name="contactMsg" id="contactMsg" placeholder='Enter your message'></textarea>
                </div>
                <button type="button">Submit</button>
            </form>
        </main>
    </>
  )
}

export default Contact