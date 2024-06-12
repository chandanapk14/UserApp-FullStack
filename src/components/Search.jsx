import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Search = () => {
    const [data, changeData] = useState(
        {
            "username": ""
        }
    )

    const [result, setResult] = useState([])

    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8086/search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch()
    }
//delete handling event
const deleteUser=(id)=>{
    let input = {"_id": id}
    axios.post("http://localhost:8086/delete",input).then(
        (response)=>{
            console.log(response.data)
            if(response.data.status=="success"){
                alert("successfully  updated")
            }
            else{
                alert("Error in deletion")
            }
        }
    ).catch().finally()
}
    return (
        <div>
            <Navbar /><br></br>
            <h3 align="center">SEARCH USER</h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Username</label>
                                <input type="text" className="form-control" name="username" value={data.username} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                                <center><button className="btn btn-primary" onClick={readValue}>SEARCH</button></center>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center><Link to='/'>Back to Login</Link></center>
                            </div>

                        </div>
                    </div>  
                </div>
            </div>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Blood Group</th>
                                <th scope="col">Mobile No:</th>
                                <th scope="col">Address</th>
                                <th scope="col">Pincode</th>
                                <th scope="col">District</th>
                                <th scope="col">Place</th>
                                <th scope="col">Email id</th>
                                <th scope="col">Username</th>
                                <th scope="col">Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map(
                                (value, index) => {
                                    return <tr>
                                        <td scope="row">{value.name}</td>
                                        <td>{value.dob}</td>
                                        <td>{value.bldgrp}</td>
                                        <td>{value.mobno}</td>
                                        <td>{value.address}</td>
                                        <td>{value.pin}</td>
                                        <td>{value.dist}</td>
                                        <td>{value.place}</td>
                                        <td>{value.email}</td>
                                        <td>{value.username}</td>
                                        <td>{value.password}</td>
                                        <td><button className="btn btn-danger" onClick={()=>{deleteUser(value._id)}}>DELETE</button></td>
                                    </tr>
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Search