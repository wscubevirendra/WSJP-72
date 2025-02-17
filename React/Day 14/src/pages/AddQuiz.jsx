import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';



export default function AddQuiz() {
  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      question: e.target.question.value,
      option1: e.target.option1.value,
      option2: e.target.option2.value,
      option3: e.target.option3.value,
      option4: e.target.option4.value,
      correctOption: e.target.correctOption.value
    }
    const quizId = uuidv4();

    const db = getDatabase();
    set(ref(db, 'quizs/' + quizId),
      data);

      e.target.reset()


  }
  return (
    <div className="max-w-lg mx-auto mt-6 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Create a Quiz</h2>
      <form onSubmit={submitHandler} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Question</label>
          <input
            type="text"
            name="question"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
            placeholder="Enter your question"
          />
        </div>


        {[1, 2, 3, 4].map((num) => (
          <div>
            <label htmlFor={`option${num}`} className="block text-sm font-medium text-gray-700">option {num}</label>
            <input
              key={num}
              name={`option${num}`}
              id={`option${num}`}
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder={`Option ${num}`}
            />
          </div>
        ))}


        <div>
          <label className="block text-sm font-medium text-gray-700">Correct Option</label>
          <select name="correctOption" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option value="">Select correct option</option>
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>{`Option ${num}`}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600"
        >
          Submit Quiz
        </button>
      </form>
    </div>
  );
}
