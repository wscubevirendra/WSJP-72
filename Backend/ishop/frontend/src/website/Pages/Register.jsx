import React, { useState, useContext } from 'react';
import { FaLock, FaDollarSign, FaStar } from 'react-icons/fa';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { MainContext } from '../../Context';
import { useDispatch } from 'react-redux';
import { login } from "../../redux/slice/userSlice";
import axios from 'axios';


export default function Register() {
    const { notify, API_BASE_URL, USER_URL } = useContext(MainContext);
    const [searchParams, SetsearchParams] = useSearchParams();
    console.log(searchParams.get("ref"))
    const navigator = useNavigate();
    const dispatcher = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = "Invalid email format";
        if (!formData.password) tempErrors.password = "Password is required";
        else if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters long";
        if (formData.confirmPassword !== formData.password) tempErrors.confirmPassword = "Passwords do not match";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validate()) {
            axios.post(API_BASE_URL + USER_URL + "/register", formData).then(
                (response) => {
                    if (response.data.status == 1) {

                        dispatcher(login(
                            {
                                data: response.data.user,
                                token: response.data.token
                            }
                        ))
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
                    notify("Internal Server error", 0);

                }
            )
        } else {
            notify("Please correct the errors", 0);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg flex w-full max-w-4xl overflow-hidden">
                <div className="w-1/2 bg-blue-50 p-8 flex flex-col items-center justify-center">
                    <img src="login.svg.png" alt="Illustration" />
                </div>
                <div className="w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-teal-600">Register</h2>
                    <p className="text-gray-500 text-sm">JOIN TO US</p>
                    <form onSubmit={submitHandler} className="mt-6 space-y-4">
                        <div>
                            <label className="block text-gray-600">Your Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-400" />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div>
                            <label className="block text-gray-600">Email Address</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="example@gmail.com" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-400" />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-gray-600">Password</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-400" />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>
                        <div>
                            <label className="block text-gray-600">Confirm Password</label>
                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-400" />
                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                        </div>
                        <button type="submit" className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600">REGISTER</button>
                    </form>
                    <p className="text-sm text-center text-gray-500 mt-4">ALREADY A USER? <Link to={`/login?${searchParams.toString()}`} className="text-green-500">LOGIN</Link></p>
                </div>
            </div>
        </div>
    );
}
