import {useState} from "react";
import {parseAndValidate} from "@/lib/validateQuiz"
import {Quiz} from "@/types/quiz";


interface Props{
    onSuccess: (quiz:Quiz)=>void;
}

export default function FileUpload({onSuccess}:Props){
    const [text,setText] = useState("");
    const [error, seterror] = useState("");

    const handleSubmit = ()=>{
        const result = parseAndValidate(text);

        if(result.error){
            seterror(result.error);
        }else if(result.data){
            seterror("");
            onSuccess(result.data);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-xl">
            <h2 className="text-xl font-bold mb-4">
                Upload or Paste JSON
            </h2>
            <textarea 
                className="w-full h-48 border rounded p-3"
                placeholder="Paste JSON here..."
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            {error && (
                <div className="mt-3 text-red-600 font-medium">
                   ❌ {error}
                </div>
            )}

            <button onClick={handleSubmit}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
                Load Quiz
            </button>
        </div>
    );
}