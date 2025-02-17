import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

export default function Form() {
    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.userName.value,
            email: e.target.userEmail.value,
            contact: e.target.contact.value
        }
        const userId = uuidv4();

        const db = getDatabase();
        set(ref(db, 'users/' + userId), data);
        e.target.reset()

    }
    return (
        <div className="flex justify-center col-span-2 items-center min-h-screen ">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Contact Form</h2>
                <form onSubmit={submitHandler} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="userName"
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contact</label>
                        <input
                            type="text"
                            name="contact"
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                            placeholder="Enter your contact number"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
