import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MathTreasureGame() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("Facile");

  const questions = {
    Facile: [
      { question: "Quel est le résultat de 10 + 5 ?", options: ["12", "15", "18", "20"], answer: "15" },
      { question: "Un carré a combien de côtés ?", options: ["3", "4", "5", "6"], answer: "4" }
    ],
    Moyen: [
      { question: "Quel est le résultat de 25 + 17 ?", options: ["42", "43", "40", "41"], answer: "42" },
      { question: "Si un crayon mesure 15 cm, combien font 3 crayons ?", options: ["30 cm", "45 cm", "60 cm", "15 cm"], answer: "45 cm" }
    ],
    Difficile: [
      { question: "Quel est le triple de 14 ?", options: ["28", "42", "56", "48"], answer: "42" },
      { question: "Un triangle isocèle a combien de côtés égaux ?", options: ["1", "2", "3", "0"], answer: "2" }
    ]
  };

  const handleAnswer = (option) => {
    if (option === questions[difficulty][step].answer) {
      setScore(score + 1);
    }
    if (step < questions[difficulty].length - 1) {
      setStep(step + 1);
    } else {
      alert(`Bravo ! Vous avez trouvé le trésor avec un score de ${score + 1}/${questions[difficulty].length}`);
      setStep(0);
      setScore(0);
    }
  };

  return (
    <div className="p-5 text-center">
      <h1 className="text-xl font-bold mb-4">Le Trésor des Mathémagiciens</h1>
      <div className="mb-4">
        <label className="mr-2">Niveau de difficulté :</label>
        <select value={difficulty} onChange={(e) => { setStep(0); setScore(0); setDifficulty(e.target.value); }}>
          <option value="Facile">Facile</option>
          <option value="Moyen">Moyen</option>
          <option value="Difficile">Difficile</option>
        </select>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="p-4 max-w-md mx-auto border rounded shadow-lg">
          <p className="mb-3">{questions[difficulty][step].question}</p>
          {questions[difficulty][step].options.map((option, index) => (
            <button key={index} className="m-2 p-2 bg-blue-500 text-white rounded" onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      </motion.div>
      <p className="mt-4">Score: {score}</p>
    </div>
  );
}
