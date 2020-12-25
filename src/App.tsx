import React, { useEffect, useState } from 'react'
import { fetchData } from './services/quiz_service';
import {Quiz, QuestionType} from './services/quiz_types';
import QuestionCard from './Components/QuestionCard'
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    color: '#ffd5ff'
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center'
  },
  pos: {
    marginBottom: 12,
  },
});


function App() {
  const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    let [ans, setAns] = useState('');

    const storeAns = (event: any) => {
        setAns(event.target.value)
    }
  //const [data, setData] = useState([{}]);
  let [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);
  let [displayResult, setDisplayResult] = useState(false);
  useEffect(() => {
    async function getData() {
      const questions: QuestionType[] = await fetchData(5, "easy");
      console.log(questions);
      setQuiz(questions);
      //setData(questions);
    }

    getData();


  }, []);
const handleSubmit = (e: React.FormEvent<EventTarget>, answer: string) => {
  e.preventDefault();
  

  const holdQuestion = quiz[currentStep];

  if (answer === holdQuestion.answer){
    setScore(++score);
  }
  if(currentStep !== quiz.length-1)
    {setCurrentStep(++currentStep)
     
    }
    
  else 
  {
    setDisplayResult(true);  
  setCurrentStep(0);
}}



if (displayResult){
  return (
    <div className = "result">
        <h1 className="sco">Quiz Completed</h1>
        <h3 className="sco"> Number of questions were {quiz.length}</h3>
        <h3 className = "sco"> You scored {score} out of {quiz.length} </h3>
      </div>
  )
}
  if(!quiz.length)
return <h3>Loading...</h3>
  return (
    <div>
     <h1 className="sco">Your current score is {score}</h1>
      
      <QuestionCard 
      options = {quiz[currentStep].option}
      question = {quiz[currentStep].question}
      callback = {handleSubmit}
      //ftn = {handleChange}
      />
     
    </div>
  )
}

export default App
