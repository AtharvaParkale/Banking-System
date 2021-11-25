import React, { useEffect } from 'react'
import { collection, addDoc } from "@firebase/firestore";
import { Link } from 'react-router-dom'
import db from './Firebase';



function SuccessPage(props) {



    const saveTransaction = () => {
        const today = new Date();
        const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        const docRef = addDoc(collection(db, "users/VUmZK1OefsDUwzfi0MFE/transaction"), {
            sender: `${props.sDetails.name}`,
            reciever: `${props.rDetails.name}`,
            amount: `${props.sAmount}`,
            date_: `${date}`,
            time_: `${time}`

        });
    }


    return (props.trigger_success) ? (
        <div className="success_card">
            <div className="success_popup">
                <div className="cross_success">
                    <Link to='/'><button onClick={() => {
                        props.setSuccessPop(false)
                        saveTransaction()
                    }} id="cross_succ">X</button></Link></div>
                <div className="text_success">
                    <h1>Success !!!</h1>

                    <h2>Rs. <span>{props.sAmount} </span>  transferred to '<span>{props.rDetails.name}</span>'</h2>
                </div>
            </div>
        </div>
    ) : "";
}

export default SuccessPage
