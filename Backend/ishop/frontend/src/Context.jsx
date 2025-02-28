import React, { createContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
const MainContext = createContext()

export default function Context(props) {
    const [category, SetCategory] = useState([])
    const API_BASE_URL = "http://localhost:5000"
    const CATEGORY_URL = "/category"
    const notify = (msg, flag) => toast(msg, { type: flag ? "success" : "error" });

    const getCategory = () => {
        axios.get(API_BASE_URL + CATEGORY_URL).then(
            (response) => {
                console.log(response)
                if (response.data.status == 1) {
                    SetCategory(response.data.categories)
                }

            }
        ).catch(
            (error) => {
                SetCategory([])

            }
        )
    }

  

    return (
        <MainContext.Provider value={{ notify, API_BASE_URL, CATEGORY_URL ,category,getCategory}}>
            {props.children}
            <ToastContainer />
        </MainContext.Provider>
    )
}


export { MainContext }
