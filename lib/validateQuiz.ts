import {Quiz} from "@/types/quiz";


export function parseAndValidate(jsonString:string): {
    data?:Quiz;
    error?: string;
} {
    try{
        const parsed = JSON.parse(jsonString);
        console.log(parsed);

        if(!parsed.title) return {error: "Missing quiz title"};
        if(!Array.isArray(parsed.questions))
            return {error: "Questions must be an array"};
        for(let i=0;i<parsed.questions.length;i++){
            const q=parsed.questions[i];
            if(!["single","multiple"].includes(q.type))
                return { error: `Question ${i + 1}: Invalid type` };

            if(!Array.isArray(q.options) || q.options.length<2)
                return { error: `Question ${i + 1}: At least 2 options required` };
            if(!Array.isArray(q.correctAnswers))
                return { error: `Question ${i + 1}: correctAnswers must be array` };

            for (const ans of q.correctAnswers) {
                if (ans >= q.options.length)
                return {
                    error: `Question ${i + 1}: correct answer index out of range`,
                };
            }
        }
        return {data:parsed};
    }catch{
        return {error:"Invalid JSON format"};
    }
}
