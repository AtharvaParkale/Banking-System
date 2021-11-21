import React, { useState } from 'react'
import "./SendMoney.css"
import { doc, updateDoc } from "@firebase/firestore";
import db from './Firebase'
import SuccessPage from './SuccessPage';
import InsufficientPage from './InsufficientPage';
import "./SuccessPage.css"
import "./InsufficientPage.css"

function SendMoney(props) {
    const [amount, setAmount] = useState(0)
    const amtPresent = props.totalMoney;
    const document_receiver = `${props.keyUser}`;
    const document_sender = `${props.senderKey}`;

    const [trigger_suc, setTrigger_suc] = useState(false)
    const [trigger_ins, setTTrigger_ins] = useState(false)

    const addData = () => {
        // const receiverAmt = parseInt(amount) + amtPresent;
        // const dataReciever = doc(db, `users/VUmZK1OefsDUwzfi0MFE/allUsers`, document_receiver)
        // updateDoc(dataReciever, { total: receiverAmt })


        if (props.senderAmt < parseInt(amount)) {
            setTTrigger_ins(true)
        }
        if (props.senderAmt >= parseInt(amount)) {
            const senderAmt = props.senderAmt - parseInt(amount);
            const dataSender = doc(db, `users/VUmZK1OefsDUwzfi0MFE/allUsers`, document_sender)
            updateDoc(dataSender, { total: senderAmt })
            const receiverAmt = parseInt(amount) + amtPresent;
            const dataReciever = doc(db, `users/VUmZK1OefsDUwzfi0MFE/allUsers`, document_receiver)
            updateDoc(dataReciever, { total: receiverAmt })
            setTrigger_suc(true)
        }

    }

    return (props.trigger_2) ? (
        <div className="sendMoney_card">
            <div className="sendMoney_popup">
                <div className="cross_money" >
                    <button  onClick={() => {
                        props.setSecondPop(false);

                    }} id="back_transfer">X</button>
                </div>
                <div className="sendMoney_text">
                    <h1>Enter your amount !!!</h1>
                </div>
                <div className="sendmoney_input">
                    <input placeholder="Enter amount in rupees" type="number" onChange={(e) => {
                        setAmount(e.target.value)
                    }} />
                    <button onClick={() => {
                        addData()
                        // props.setSecondPop(false)
                    }} id="transfer_btt">Transfer</button>
                </div>
            </div>

            <SuccessPage trigger_success={trigger_suc} setSuccessPop={setTrigger_suc}>

            </SuccessPage>
            <InsufficientPage trigger_insufficient={trigger_ins} setInsufPop={setTTrigger_ins} >

            </InsufficientPage>
        </div>
    ) : "";
}

export default SendMoney
