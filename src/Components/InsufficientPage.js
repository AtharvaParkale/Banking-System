import React from 'react'


function InsufficientPage(props) {
    return (props.trigger_insufficient) ? (
        <div className="insufficient_card">
            <div className="insufficient_popup">
                <div className="cross_insufficient">
                    <button onClick={() => {
                        props.setInsufPop(false)
                    }} id="insufficientFund">X</button></div>
                <div className="text_insufficient">
                    <h1><span>Insufficient Funds</span> in your account !</h1>
                    </div>
            </div>
        </div>
    ) : "";
}

export default InsufficientPage
