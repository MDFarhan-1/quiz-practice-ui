export type QuestionType = "single" | "multiple";

export interface Question {
    id: number;
    type: QuestionType;
    question : string;
    options : string[];
    correctAnswers : number [];
    explanation? : string;
}

export interface Quiz {
    title: string;
    questions: Question[];
}