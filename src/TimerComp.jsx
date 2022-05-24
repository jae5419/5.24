import { useState, useEffect } from "react";

const TimerComp=()=>{
    const [date, setDate]=useState(new Date());
    const tick=()=>{
        setDate(new Date());
    }
    useEffect(()=>{
        setInterval(()=>tick(),1000);
    })
    return (<>
    <h1>{date.toLocaleTimeString()}</h1>
    </>)
}

export default TimerComp;