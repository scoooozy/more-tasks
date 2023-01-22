import  React, { useState , useEffect } from 'react'
import "./Menu.css"
export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className='alignment'>
            <p className='time'> Time : {date.toLocaleTimeString()}</p>
            <p className='time'> Date : {date.toLocaleDateString()}</p>

        </div>
    )
}

export default DateTime