import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { login } from "../../redux/slice/userSlice";
import { MainContext } from "../../Context";
import axios from "axios";



export default function Login() {
    const user = useSelector((state) => state.user.data);
    const cartDate = useSelector((state) => state.cart.data);
    const { notify, API_BASE_URL, USER_URL } = useContext(MainContext);
    const [searchParams, SetsearchParams] = useSearchParams();
    const dispatcher = useDispatch()
    const navigator = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        axios.post(API_BASE_URL + USER_URL + "/login", data).then(
            (response) => {
                if (response.data.status == 1) {
                    dispatcher(login(
                        {
                            data: response.data.user,
                            token: response.data.token
                        }
                    ))

                    axios.post(API_BASE_URL + USER_URL + "/move-to-db/" + response?.data.user?._id, {
                        cart: JSON.stringify(cartDate)
                    }).then(
                        (success) => {
                            console.log(success);
                        }
                    ).catch(
                        (error) => {
                            console.log(error);

                        }
                    )

                    if (searchParams.get("ref") == "checkout") {
                        navigator("/checkout")
                    } else {
                        navigator("/")
                    }



                }
                notify(response.data.msg, response.data.status)

            }
        ).catch(
            (error) => {
                console.log(error)
                notify("Internal Server error", 0);

            }
        )
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg flex w-full max-w-4xl overflow-hidden">
                {/* Left Side Illustration */}
                <div className="w-1/2 bg-blue-50 p-8 flex flex-col items-center justify-center">
                    <div className="relative w-full flex flex-col items-center">

                        <img src="login.svg.png" alt="" />
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-teal-600">Login</h2>
                    <p className="text-gray-500 text-sm">JOIN TO US</p>
                    <form onSubmit={submitHandler} className="mt-6 space-y-4">

                        <div>
                            <label className="block text-gray-600">Email Address</label>
                            <input type="email" name="email" placeholder="Example@gmail.com" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-400" />
                        </div>
                        <div>
                            <label className="block text-gray-600">Password</label>
                            <input type="password" name="password" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-400" />
                        </div>

                        <button className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600">Login</button>
                    </form>
                    <p className="text-sm text-center text-gray-500 mt-4">For Accound create ? <Link to={`/register?${searchParams.toString()}`} className="text-green-500">Register</Link></p>
                </div>
            </div>
        </div>
    );
}