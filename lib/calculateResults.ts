import { Quiz } from "@/types/quiz";

export function calculateResults(
  quiz: Quiz,
  answers: Record<number, number[]>
) {
  let correct = 0;
  let wrong = 0;
  let skipped = 0;

  quiz.questions.forEach((q, index) => {
    const selected = answers[index];

    // If no answer selected → skipped
    if (!selected || selected.length === 0) {
      skipped++;
      return;
    }

    const sortedSel = [...selected].sort().toString();
    const sortedCor = [...q.correctAnswers].sort().toString();

    if (sortedSel === sortedCor) {
      correct++;
    } else {
      wrong++;
    }
  });

  const total = quiz.questions.length;

  return {
    total,
    correct,
    wrong,
    skipped,
    accuracy: ((correct / total) * 100).toFixed(2),
  };
}
