import { useState,useMemo } from "react"

const AverageComp=()=>{
    const [inputNum, setInputNum]=useState(0);
    const [arr, setArr]=useState([1, 5, 10, 4]);
    const ChangeNum=(e)=>{
        setInputNum(e.target.value);
    }
    const addNum=()=>{
        setArr([...arr, inputNum]);
    }
    const avgNum=(list)=>{
        return list.reduce((sum, current)=>sum+Number(current),0)/list.length;
    }
    const avg=useMemo(()=>avgNum(arr), [arr]);
    return (<>
    <input type="number" onChange={ChangeNum}></input>
    <button onClick={addNum}>추가</button>
    <h3>모든 수의 평균 : {avg}</h3>
    <ul>
        {arr.map((num, i)=><li key={i}>{num}</li>)}
    </ul>
    </>)
}

export default AverageComp;