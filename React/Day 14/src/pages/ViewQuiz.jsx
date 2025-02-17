import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";


export default function ViewQuiz() {
  const [quizData, SetquizData] = useState([])

  useEffect(
    () => {

      const db = getDatabase();
      const starCountRef = ref(db, 'quizs/');
      const qs = []
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        const newArray = Object.keys(data);
        for (let d of newArray) {
          qs.push({ id: d, ...data[d] })
        }
      });
      SetquizData(qs)

    },
    []
  )

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Quiz Questions</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-center">
              <th className="border border-gray-300 px-4 py-2">Question</th>
              <th className="border border-gray-300 px-4 py-2">Option 1</th>
              <th className="border border-gray-300 px-4 py-2">Option 2</th>
              <th className="border border-gray-300 px-4 py-2">Option 3</th>
              <th className="border border-gray-300 px-4 py-2">Option 4</th>
            </tr>
          </thead>
          <tbody>
            {
              quizData.map((quiz, index) => {
                console.log(quiz.correctOption)
                return (
                  <tr key={index} className="text-center border-t border-gray-300">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">
                      {quiz.question}
                    </td>
                    <td className={`${quiz.correctOption === "1" ? 'bg-red-400' : ''}   border border-gray-300 px-4 py-2`}>
                      {quiz.option1}
                    </td>
                    <td className={`${quiz.correctOption === "2" ? 'bg-red-400' : ''} border border-gray-300 px-4 py-2`}>
                      {quiz.option2}
                    </td>
                    <td className={`${quiz.correctOption === "3" ? 'bg-red-400' : ''} border border-gray-300 px-4 py-2`}>
                      {quiz.option3}
                    </td>
                    <td className={`${quiz.correctOption === "4" ? 'bg-red-400' : ''} border border-gray-300 px-4 py-2`}>
                      {quiz.option4}
                    </td>

                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div >
  );
}
