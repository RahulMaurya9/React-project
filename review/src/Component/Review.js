import React , {useState} from 'react'
import people from './Data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';





function Review() {
  const [index , setIndex]  = useState(Math.floor(Math.random()*4))
  const {id , name , job , image , text} = people[index];
  const checkNumber = (number)=>{
    if(number > people.length -1){
      return 0;
    }
    if(number < 0){
      return people.length -1;
    }
    return number;
  }
  const backReview = ()=>{
    setIndex((index)=>{
      if(index<0){
        let newIndex = people.length;
        return checkNumber(newIndex);
      }
      let newIndex = index-1;
      return checkNumber(newIndex);
    })
  }
  const nextReview = ()=>{
    setIndex((index)=>{
      if(index >= people.length - 1){
        let newIndex = 0;
        return  newIndex;
      }
      let newIndex = index+1;
      return newIndex;
    })
  }
  const randomReview = ()=>{
    setIndex(Math.floor(Math.random()*4));
  }
  
  return (
    <article className= "review">
      <div className="image-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={backReview} className="prev-btn"> 
        <FaChevronLeft/>
        </button>
        <button onClick = {nextReview } className="next-btn">
          <FaChevronRight/>
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>Surprise Me</button>
    </article>
  )
}

export default Review
