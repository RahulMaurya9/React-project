import React , {useState} from 'react'
import './App.css';
import Data from './Components/Data'
import SingleQuestion from './Components/SingleQuestion'

function App() {
  const [questions,setQuestions] = useState(Data)
  return (
    <main>
      <div className="container">
        <h3>Question and answer about login</h3>
        <section className="info">
          {
            questions.map((question)=>{
              return <SingleQuestion key={question.info} {...question}/>
            })
          }
        </section>
      </div>
      
    </main>
  )
}


export default App
