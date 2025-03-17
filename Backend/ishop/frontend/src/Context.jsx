import React, { createContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
const MainContext = createContext()

export default function Context(props) {
    const [category, SetCategory] = useState([]);
    const [color, setColor] = useState([]);
    const [product, Setproduct] = useState([]);
    const API_BASE_URL = "http://localhost:5000"
    const CATEGORY_URL = "/category";
    const COLOR_URL = "/color"
    const PRODUCT_URL = "/product"
    const notify = (msg, flag) => toast(msg, { type: flag ? "success" : "error" });

    const getCategory = (category_id = null) => {

        let categoryGetAPI = API_BASE_URL + CATEGORY_URL;

        if (category_id != null) {
            categoryGetAPI = categoryGetAPI + `/${category_id}`
        }

        axios.get(categoryGetAPI).then(
            (response) => {
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

    const getColors = () => {

        axios.get(API_BASE_URL + COLOR_URL).then(
            (success) => {
                setColor(success.data.colors);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )

    }

    const getProduct = (product_id = null) => {

        let productGetAPI = API_BASE_URL + PRODUCT_URL;

        if (product_id != null) {
            productGetAPI = productGetAPI + `/${product_id}`
        }

        axios.get(productGetAPI).then(
            (response) => {
                if (response.data.status == 1) {
                    Setproduct(response.data.products)
                }

            }
        ).catch(
            (error) => {
                Setproduct([])

            }
        )
    }





    return (
        <MainContext.Provider value={{ notify, API_BASE_URL, CATEGORY_URL, category, getCategory, COLOR_URL, getColors, color,PRODUCT_URL,getProduct ,product}}>
            {props.children}
            <ToastContainer autoClose={400} />
        </MainContext.Provider>
    )
}


export { MainContext }
