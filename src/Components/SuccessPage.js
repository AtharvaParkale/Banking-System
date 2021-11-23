import React from 'react'
import { Link } from 'react-router-dom'



function SuccessPage(props) {
    return (props.trigger_success) ? (
        <div className="success_card">
            <div className="success_popup">
                <div className="cross_success">
                    <Link to='/'><button onClick={() => {
                        props.setSuccessPop(false)
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
