"use client";

import {useState} from "react";
import {Quiz} from "@/types/quiz";
import QuestionCard from "@/components/QuestionCard";
import Analytics from "@/components/Analytics";
import {calculateResults} from "@/lib/calculateResults";

interface Props{
    quiz: Quiz;
}

export default function QuizPage({quiz}: Props) {
    const [current,setCurrent] = useState(0);
    const [answers,setAnswers] = useState<Record<number,number[]>>({});
    const [finished,setFinished] = useState(false);

    const handleAnswer = (selected: number[])=>{
        setAnswers({...answers,[current]:selected});
    };
    
    if(finished){
        const results = calculateResults(quiz,answers);
        return <Analytics results={results} />;
    }

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>
            <QuestionCard
                question = {quiz.questions[current]}
                selected = {answers[current]|| []}
                onChange = {handleAnswer}
            />

            <div className="flex justify-between mt-6">
                <button disabled={current==0} onClick={()=> setCurrent(current-1)} className="px-4 py-2 bg-gray-300 rounded">
                    Previous
                </button>
                {current===quiz.questions.length-1 ?(
                    <button
                        onClick={()=>setFinished(true)}
                        className="px-4 py-2 bg-green-600 text-white rounded"
                    > Submit</button>
                ):(
                    <button onClick={()=> setCurrent(current+1)} className="px-4 py-2 bg-blue-600 text-white rounded">
                        Next
                    </button>

                )}
            </div>
        </div>
    );
}