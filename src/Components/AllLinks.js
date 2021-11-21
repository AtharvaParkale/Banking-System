// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { onSnapshot, collection, doc, updateDoc } from "@firebase/firestore";
// import db from './Firebase'
// import "./Home.css"

// function AllLinks() {
//     const [bankUsers, setBankUsers] = useState([])
//     const [document_, setDocument_] = useState('RjtpKTp9dQFGc25uIQwE')
//     const [namePora, setNamePora] = useState('Atharva The great')
//     const [custName, setCustName] = useState({})
//     // const [passDetails, setPassDetails] = useState({})

//     const addData = () => {
//         const data = doc(db, `users/VUmZK1OefsDUwzfi0MFE/allUsers`, document_)
//         updateDoc(data, { name: namePora, total: 9000 })
//         console.log("Done")
//     }

//     const profile = (details) => {
//         // console.log(details)
//         const passDet = details;
//         console.log(passDet)
//     }

//     useEffect(() => {
//         onSnapshot(collection(db, `users/VUmZK1OefsDUwzfi0MFE/allUsers`), (snapshot) => {
//             // snapshot.docs.map((doc) => {console.log(doc.data())})
//             setBankUsers(snapshot.docs.map((doc) => doc.data()))
//         })
//         // console.log(custName)
//         profile(custName)
//     }, [custName])


//     return (
//         <div>

//             <table>
//                 <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Current Balance</th>
//                     <th>Action</th>
//                 </tr>
//                 {
//                     bankUsers.map((bUser) =>
//                         <>
//                             <tr>
//                                 {/* <td>{bUser.id}</td> */}
//                                 <td>{bUser.name}</td>
//                                 <td>{bUser.email}</td>
//                                 <td>{bUser.phone}</td>
//                                 <td>Rs.{bUser.total}</td>
//                                 <td><button onClick={() => {
//                                     setCustName({ name: bUser.name, email: bUser.email, phone: bUser.phone })
//                                     // profile({name:bUser.name,email:bUser.email,phone:bUser.phone})
//                                 }}>Select</button></td>
//                             </tr>
//                         </>
//                     )
//                 }
//             </table>
//             <div>
//                 <input type="number" />
//                 <button onClick={addData}>Add</button>
//             </div>

//             <Link to='/profilePage' >
//                 <h1>To all links</h1>
//             </Link>
//             {/* <Link to={{
//                 pathname: '/profilePage',
//                 state: {
//                     fromNotications: true
//                 }
//             }} >
//                 <h1>To all links</h1>
//             </Link> */}


//         </div>
//     )
// }

// export default AllLinks
