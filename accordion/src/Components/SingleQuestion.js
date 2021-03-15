import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';



const SingleQuestion = ({id , title , info}) =>{
  const [showInfo , setShowInfo]= useState(false)
  return (
    <article className="question">
      <header>
        <h3>{title}</h3>
        <button className="btn" onClick={()=>setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlinePlus/> : <AiOutlineMinus/>}

        </button>
      </header>
      { showInfo && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
