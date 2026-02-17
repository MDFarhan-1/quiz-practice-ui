import {Question} from "@/types/quiz";

interface Props {
    question : Question;
    selected:number[];
    onChange: (selected:number[]) => void;
}


export default function QuestionCard ({question, selected,onChange}:Props){
    const toggleOption = (index : number) => {
        if(question.type === "single"){
            onChange([index]);
        }else{
            
                if(selected.includes(index)){
                    onChange(selected.filter((i)=>i!==index));
                }else{
                    onChange([...selected,index]);
                }
            
        }
    };

    return (
        <div className="bg-white p-6 rounded shadow">
            <h2 className="font-semibold mb-4">{question.question}</h2>

            {question.options.map((opt,idx)=>(
                <div key={idx} className="mb-2">
                    <label className="flex items-center gap-2">
                        <input
                            type={question.type === "single"?"radio":"checkbox"}
                            checked={selected.includes(idx)}
                            onChange={()=>toggleOption(idx)}
                        />
                        {opt}
                    </label>
                </div>
            ))}
        </div>
    );
}