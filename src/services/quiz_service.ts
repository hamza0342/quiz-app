import { Quiz, QuestionType } from "./quiz_types";

const shuffleArray = (array: any[]) => 
    [...array].sort(()=> Math.random() - 0.5);


export const fetchData = async(amount: number, difficulty: string): Promise <QuestionType[]> => {
    const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`);
    //let data: QuestionType[] = 
    let {results} = await response.json();
    //const results = data.results 
    const quiz: QuestionType[] = results.map((questionObj: Quiz) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
          
        }
        
    })
    return quiz;

}

{/*}

*/}