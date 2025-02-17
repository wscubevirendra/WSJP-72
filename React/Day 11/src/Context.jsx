import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'

const MainContext = createContext()

export default function Context(props) {
    const [products, SetProducts] = useState([]);
    const [cart, Setcart] = useState([]);

    useEffect(
        () => {
            axios.get("https://dummyjson.com/products").then(
                (succes) => {
                    SetProducts(succes.data.products)

                }

            ).catch(
                (error) => {
                    console.log(error)
                }

            )
        },
        []
    )

    const addToCart = (id) => {
        const product = products.find(
            (item) => {
                return item.id == id
            }
        )

        if (product) {
            const cartProduct = cart.find(
                (cd) => {
                    return cd.id == id
                }
            )

            if (cartProduct) {

                //qty increase
                const updateCart = cart.map(
                    (prod) => {
                        return prod.id == id ? { ...prod, qty: prod.qty + 1 } : prod
                    }
                )

                Setcart(updateCart)

            } else {
                Setcart([...cart, { ...product, qty: 1 }])
            }

        }


    }


    const qtyHandler = (id, flag) => {
        let updateCart;
        const product = products.find(
            (item) => {
                return item.id == id
            }
        )


        if (flag == 1) {
            if (product) {
                updateCart = cart.map(
                    (prod) => {
                        return prod.id == id ? { ...prod, qty: prod.qty + 1 } : prod
                    }
                )

            }

        }
        else {
            updateCart = cart.map(
                (prod) => {
                    if (prod.qty > 1) {
                        return prod.id == id ? { ...prod, qty: prod.qty - 1 } : prod
                    }
                }
            )

        }

        Setcart(updateCart)




    }


    return (
        <MainContext.Provider value={{ addToCart, cart, qtyHandler }}>
            {props.children}
        </MainContext.Provider>
    )
}


export { MainContext }