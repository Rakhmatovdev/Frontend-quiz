import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import Test from '../components/Test'

const QuizPage = () => {
  
  const {title}=useParams()
  console.log(title);
  const {data:quizzes,isPending,error}= useFetch(`http://localhost:3000/quizzes`)
useEffect(()=>{
  document.title="Quiz "+title;
},[title])
console.log(quizzes?.data[0].title);
  return (
    <section className='quiz-container container'>
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
    
    {quizzes && <Test questions={quizzes.data[0]}/>}
    </section>
  )
}

export default QuizPage