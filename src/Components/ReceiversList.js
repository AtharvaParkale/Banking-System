import React from 'react'
import "./ReceiversList.css"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { onSnapshot, collection } from "@firebase/firestore";
import db from './Firebase'
import SendMoney from './SendMoney';

function ReceiversList(props) {
    const [bankUsers, setBankUsers] = useState([])
    const [trigger_2, setTrigger_2] = useState(false)
    const [money, setMoney] = useState(0)
    const [key, setKey] = useState("")
    const [receiverDetails, setReceiverDetails] = useState({})

    const parameters = (totalTransfered, key, receiverDetails) => {
        console.log(totalTransfered)
        console.log(key)
        console.log(receiverDetails)


    }
    useEffect(() => {
        onSnapshot(collection(db, `users/VUmZK1OefsDUwzfi0MFE/allUsers`), (snapshot) => {
            setBankUsers(snapshot.docs.map((doc) => doc.data()))
        })
        parameters(money, key, receiverDetails)

    }, [money, key])

    return (props.trigger) ? (
        <div className="recievers">
            <div className="reciever_popup">
                <h1>Select a Reciever !</h1>
                <div className="close_pop">
                    <button className="close_popup"
                        onClick={() => {
                            props.setTrigger(false);
                        }} id="backButton">Cancel</button>
                </div>

                <div className="receiver_list">
                    <table id="bankUsers">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Current Balance</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                bankUsers.map((bUser) =>
                                    <>
                                        <tr>
                                            {/* <td>{bUser.id}</td> */}
                                            <td>{bUser.name}</td>
                                            <td>{bUser.email}</td>
                                            <td>{bUser.phone}</td>
                                            <td>Rs.{bUser.total}</td>
                                            <td><Link to='/profilePage' ><button onClick={() => {
                                                setTrigger_2(true)
                                                setMoney(bUser.total)
                                                setKey(bUser.key)
                                                setReceiverDetails(bUser)
                                                console.log(receiverDetails)
                                                // console.log(bUser)
                                            }}>Select</button></Link></td>
                                        </tr>
                                    </>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            <SendMoney
                trigger_2={trigger_2}
                setSecondPop={setTrigger_2}
                totalMoney={money} keyUser={`${key}`}
                senderKey={props.senderKey}
                senderAmt={props.senderAmt}
                rDetails={receiverDetails}
                sDetails={props.sDetails}
            >

            </SendMoney>
        </div>
    ) : "";
}

export default ReceiversList
