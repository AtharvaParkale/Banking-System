import React from 'react'
import { Link } from 'react-router-dom'



function SuccessPage(props) {
    return (props.trigger_success) ? (
        <div className="success_card">
            <div className="success_popup">
                <div className="cross_success">
                    <Link to='/'><button onClick={()=>{
                    props.setSuccessPop(false)
                }} id="cross_succ">X</button></Link></div>
                <div className="text_success"><h1>Your transfer was completed successfully !</h1></div>
            </div>
        </div>
    ):"";
}

export default SuccessPage
