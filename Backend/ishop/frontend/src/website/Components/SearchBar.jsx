import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../Context'

export default function SearchBar() {
    const { category, getCategory } = useContext(MainContext);
    useEffect(
        () => {
            getCategory()
        },
        []
    )
    return (
        <div className='w-full flex p-4 justify-between bg-[#01A49E] '>
            <div className=' bg-white rounded-xl py-1 px-4'>
                <select name="" id="" className='p-1 outline-none border-none'>
                    <option value="">All Category</option>
                    {
                        category.map(
                            (cat, i) => {
                                return (
                                    <option className=' capitalize' value="">{cat.name}</option>
                                )
                            }
                        )
                    }
                </select>
                <input className=' outline-none px-1' type="text" name="" id="" />
            </div>
            <div className='flex text-white text-xl gap-6'>
                <div>free shipping over $199</div>
                <div>30 days money back</div>
                <div>100% secure payment</div>
            </div>
        </div>
    )
}
