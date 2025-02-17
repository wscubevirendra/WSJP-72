import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";


export default function Listing() {
    const [userData, setUserdata] = useState([])

    useEffect(() => {
        const db = getDatabase();
        const starCountRef = ref(db, 'users/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const newData = Object.keys(data)
            const newArray = []
            newData.map((d) => {
                newArray.push({ ...data[d], Id: d })
            })
            setUserdata(newArray)

        });

    }, [])
    return (
        <div className=" col-span-3  p-2 ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
                    <tr>

                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Contact
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((data, index) => {
                            return (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {data.name}
                                    </th>
                                    <td className="px-6 py-4">{data.email}</td>
                                    <td className="px-6 py-4">{data.contact}</td>

                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>

    )
}
