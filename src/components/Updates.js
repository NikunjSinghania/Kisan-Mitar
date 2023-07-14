import React , {useState, useEffect} from 'react'
import axios from 'axios'
function Updates() {
const [update, setUpdate] = useState([]);
const updateFun = async () => {
    const result = await axios.post('https://localhost/Kisan/index.php')
    setUpdate(result.data)
}

useEffect(() => {
    updateFun()
}, [])
  return (
    <div>
        <h1 id="mainHeading">LATEST UPDATES</h1>
        <div id="mainUpdatesContainer">
        {(update).map((obj) => 
        

        <span>
            <h1>{obj.title}</h1>
            <h4>{obj.by}</h4>
            <h4>{obj.date}</h4>
            <p>{obj.content}</p>
        </span>
        )}
        </div>
        
    </div>
  )
}

export default Updates