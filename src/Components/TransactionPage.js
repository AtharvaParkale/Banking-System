import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { onSnapshot, collection } from "@firebase/firestore";
import db from './Firebase'
import "../App.css"



function TransactionPage() {
    const [bankUsers, setBankUsers] = useState([])

    useEffect(() => {
        onSnapshot(collection(db, `users/VUmZK1OefsDUwzfi0MFE/transaction`), (snapshot) => {
            setBankUsers(snapshot.docs.map((doc) => doc.data()))
        })
    }, [])

    return (
        <div className="table_">
            <table id="bankUsers">
                <thead>
                    <tr>
                        <th>Sender</th>
                        <th>Receiver</th>
                        <th>Amount Transferred</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bankUsers.map((bUser) =>
                            <>
                                <tr>
                                    <td>{bUser.sender}</td>
                                    <td>{bUser.reciever}</td>
                                    <td>Rs. {bUser.amount}</td>
                                    <td>{bUser.date_}</td>
                                    <td>{bUser.time_}</td>
                                </tr>
                            </>
                        )
                    }
                </tbody>
            </table>

           <div className="home_page_button"> <Link to='/'><button>To home page</button></Link></div> 
        </div>
    )
}

export default TransactionPage
