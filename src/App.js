import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProfilePage from './Components/ProfilePage';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { onSnapshot, collection} from "@firebase/firestore";
import db from './Components/Firebase'
import "./Components/Home.css"
import "./App.css"

function App() {
  const [bankUsers, setBankUsers] = useState([])
  const [custName, setCustName] = useState({})


  const profile = (details) => {
    const passDet = details;
    console.log(passDet)
  }

  useEffect(() => {
    onSnapshot(collection(db, `users/VUmZK1OefsDUwzfi0MFE/allUsers`), (snapshot) => {
      setBankUsers(snapshot.docs.map((doc) => doc.data()))
    })
    profile(custName)
  }, [custName])

  return (
    <>
      <Router>

        <Routes>
          <Route exact path="/" element={
            <div className="table_holder">

              <h1>Select a sender !</h1>

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
                          <td>{bUser.name}</td>
                          <td>{bUser.email}</td>
                          <td>{bUser.phone}</td>
                          <td>Rs.{bUser.total}</td>
                        <td><Link to='/profilePage' ><button onClick={() => {
                            setCustName({ name: bUser.name, email: bUser.email, phone: bUser.phone,total:bUser.total,key:bUser.key,photoID:bUser.photoId })
                          }}>Select</button></Link></td>
                        </tr>
                      </>
                    )
                  }
                </tbody>
              </table>
            </div>
          } />
          <Route path="/profilePage" element={<ProfilePage pDetails={custName} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

