import React from 'react'
import Navbar from '../../components/Navbar/Navbar';

function About() {
    return (
        <>
        <Navbar/>
        <div>
            <h1>Welcome to our Gun Permit Quiz Application!</h1>
             <p>
                 This application is designed to help individuals determine if they are eligible to obtain a gun permit in their state.
             </p>
             <p>
                 The quiz consists of a series of multiple-choice questions that will ask about your criminal history, mental health, and other factors that may impact your ability to legally own a firearm. Once you have completed the quiz, you will receive a report on your eligibility status and any next steps you may need to take in order to obtain a permit.
             </p>
             <p>
                 It is important to note that the quiz is for informational purposes only and should not be considered legal advice. The information provided by the quiz is based on the laws and regulations of the state you indicate you are located in. However, laws and regulations can change and you should always check with your local authorities for the most accurate and up-to-date information.
             </p>
             <p>
                 Additionally, please keep in mind that even if you are found to be eligible to obtain a permit, there may be other requirements or steps you must take in order to actually obtain one.
             </p>
             <p>
                We hope that this application is helpful in your journey to legally owning a firearm. If you have any questions or concerns, please feel free to contact us.
             </p>
        </div>
    </>
    )
}

export default About