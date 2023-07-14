import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Home() {
    const [update, setUpdates] = useState([])
    const updateFun = async () => {
    const result = await axios.post('http://localhost/Kisan/index.php')
    setUpdates(result.data)
    }

    
    useEffect(() => {
        updateFun()
    }, [])

  return (
    <>
        <section id='home'>
            <div className='slideshow'>
                <img src="photo1.jpeg"></img>
            </div>
        </section>
        <section id="homeContent">
            <h1>HOW WE CAN HELP THEM?</h1>
            <p>Kisan Mitra aims to improve the last mile delivery of support services and access to entitlements for rural population, by facilitation at the individual level, institutionalizing the systems for improving governance and a grievance and redressal system at the district level</p>
            <div>
                <span>
                    <img src="bell.gif"></img>
                    <span>
                        <h3>HELP LINE</h3>
                        <p>
                        Strengthening governance is the primary purpose of the Kisan Mitra helpline. A toll-free number will be made available to all famers in the concerned districts.
                        </p>
                    </span>
                </span>
                <span>
                    <img src="call.gif"></img>
                    <span>
                        <h3>ADVISORIES</h3>
                        <p>
                        Kisan Mitra Advisories are an attempt at effective utilisation of information and communication technologies in order to provide quality and timely support for knowledge extension for farmers.
                        </p>
                    </span>
                </span>
                <span>
                    <img src="help.gif"></img>
                    <span>
                        <h3>SERVICE CENTRE</h3>
                        <p>
                        Farmer service centres (FSCs) at the block level, paired with a centralized support structure.</p>
                    </span>
                </span>
            </div>
        </section>
        <section id="updates">
            <h1>LATEST UPDATES</h1>
            <div id="updatesContainer">
                {(update).map((obj)=> 
                    <span>
                        <h3>{obj.title}</h3>
                        <h4>By {obj.by}</h4>
                        <h4>Posted On {obj.date}</h4>
                        <p>{obj.content}</p>
                    </span>
                )}
            </div>
        </section>
    </>

  )
}

export default Home