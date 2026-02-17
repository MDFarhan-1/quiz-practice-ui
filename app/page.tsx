"use client";
import {useState} from "react";
import FileUpload from "@/components/FileUpload";
import {Quiz} from "@/types/quiz";
import QuizPage from "./quiz/page";



export default function Home(){
    const  [quiz,setQuiz] = useState<Quiz | null>(null);
    if(quiz){
        return <QuizPage quiz={quiz}/>;
    }
    return (
        <div className= " min-h-screen flex items-center justify-center bg-gray-100">
            <FileUpload onSuccess={setQuiz}/>
        </div>
    );
}