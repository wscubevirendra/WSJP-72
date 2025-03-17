import axios from 'axios';
import React, { useContext } from 'react'
import { MainContext } from '../../../Context';

export default function AddColor() {

    const { API_BASE_URL, COLOR_URL, notify } = useContext(MainContext);

    const addColorCode = (event) => {
        event.preventDefault();
        const data = {
            colorName: event.target.colorName.value,
            colorCode: event.target.colorCode.value
        }

        axios.post(API_BASE_URL + COLOR_URL + "/create", data).then(
            (success) => {
                notify(success.data.msg, success.data.status);
                if (success.data.status == 1) {
                    event.target.reset();
                }
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )

    }


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
                <h2 className="text-2xl font-semibold text-center mb-6">Color Input Form</h2>

                <form onSubmit={addColorCode}>
                    <div className="mb-4">
                        <label htmlFor="colorName" className="block text-sm font-medium text-gray-700">
                            Color Name
                        </label>
                        <input
                            name='colorName'
                            type="text"
                            id="colorName"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter color name"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="colorCode" className="block text-sm font-medium text-gray-700">
                            Color Code (Hex/RGB)
                        </label>
                        <input
                            name='colorCode'
                            type="color"
                            id="colorCode"
                            className="mt-1 h-10 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="#FFFFFF or rgb(255, 255, 255)"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
