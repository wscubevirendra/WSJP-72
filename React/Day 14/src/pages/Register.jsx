import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { MainContext } from "../Context";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const { userHandler } = useContext(MainContext);
  const navigator = useNavigate()
  function registerHandler(e) {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        userHandler(user.toJSON())
        navigator("/")

        // ...
      })
      .catch((error) => {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Register</h2>
        <form onSubmit={registerHandler} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded-xl hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
