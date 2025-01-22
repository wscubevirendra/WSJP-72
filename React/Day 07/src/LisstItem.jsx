import React, { useState } from "react"
import { IoMdHeartDislike, IoMdHeart } from "react-icons/io";
function LisstItem(props) {
    const [toggle, Settoggle] = useState(true)
    const toggleHadler = () => {
        Settoggle(!toggle)
    }

    return (
        <div key={props.i} className="card col-3">
            <img src={props.image} className="card-img-top" alt="." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div className="fs-1">
                    {
                        toggle == true ?
                            <IoMdHeart onClick={toggleHadler} />
                            :
                            <IoMdHeartDislike onClick={toggleHadler} />
                    }


                </div>

            </div>
        </div>
    )
}


export default LisstItem;