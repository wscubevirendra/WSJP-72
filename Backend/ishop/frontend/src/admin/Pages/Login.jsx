import { useContext } from "react";
import { MainContext } from "../../Context"
import axios from "axios";
import { useDispatch } from 'react-redux'
import { login } from "../../redux/slice/adminSlice";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const { API_BASE_URL, ADMIN_URL, notify } = useContext(MainContext)
  const dispatcher = useDispatch()
  const navigator=useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    axios.post(API_BASE_URL + ADMIN_URL + "/login", data).then(
      (response) => {
        if (response.data.status == 1) {
         
          dispatcher(login(
            {
              data: response.data.admin,
              token:response.data.token
            }
          ))
          navigator("/admin")
          


        }
        notify(response.data.msg, response.data.status)

      }
    ).catch(
      (error) => {
        console.log(error)

      }
    )

  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Admin Login</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
