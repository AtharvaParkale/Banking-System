import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import "./ProfilePage.css"
import { Link } from 'react-router-dom'
import ReceiversList from './ReceiversList'
import profile_picture from './profile_picture.jpg';

import { getStorage, ref, getMetadata } from "firebase/storage";
const storage = getStorage();
const forestRef = ref(storage, 'userProfilePhotos/1mUkol.jpg');

function ProfilePage({ pDetails }) {

    const [popUp, setPopUp] = useState(false)
    const senderKey = pDetails.key;
    const senderAmt = pDetails.total;
    useEffect(() => {
        console.log("This is sender key :")
        console.log(senderKey)

        getMetadata(forestRef)
        .then((metadata) => {
          // Metadata now contains the metadata for 'images/forest.jpg'
          console.log(metadata.bucket)
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
        });
    }, [])
    
    return (
        <>
            <div className="main">
                <div className="profile_details">
                    <div className="box profile_pic">
                        <div className="image_holder">
                            {/* <img src={profile_picture} alt="Logo" /> */}
                            <img src={pDetails.photoID} alt="Logo" />
                        </div>
                    </div>

                    <div className="box profile_username">
                        <h2>{pDetails.name}</h2>
                    </div>

                    <div className="box profile_contact">
                        <div className="profile_phone"><span>Phone : </span> {pDetails.phone} </div>
                        <div className="profile_email"><span>Email : </span> {pDetails.email} </div>
                    </div>

                    <div className="box profile_balance">
                        <div className="profile_money">
                            <span>Balance : </span> Rs. {pDetails.total}
                        </div>
                    </div>

                    <div className="box profile_buttons">
                        <button onClick={() => {
                            popUp ? setPopUp(false) : setPopUp(true);
                        }}>Send</button>

                        <Link to="/"><button id="backButton">Back</button></Link>
                        

                    </div>

                </div>
                <ReceiversList 
                trigger={popUp} 
                setTrigger={setPopUp} 
                senderKey={senderKey} 
                senderAmt={senderAmt} 
                sDetails={ pDetails }>
                    <h3>My popup</h3>
                </ReceiversList>

            </div>
        </>
    )
}

export default ProfilePage
