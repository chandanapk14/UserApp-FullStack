import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'

const Register = () => {
    const [data, changeData] = useState(
       [ {
            "name": "",
            "dob": "",
            "bldgrp": "",
            "mobno": "",
            "address": "",
            "pin": "",
            "dist": "",
            "place": "",
            "email": "",
            "username": "",
            "password": "",
        }
    ]
    )

    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        if(data.password!=data.cpass)
            {
        alert("Incorrect Password")
            }
        else{
        axios.post("http://localhost:8086/add", data).then(
            (response) => {
                       
                if (response.data.status == "success") {
                    console.log(response.data)
                    alert("Successfully added")
                } else {
                    alert("Error")
                }
            }).catch()
    }}
    return (
        <div>
            <Navbar /><br></br>
            <h3 align="center">REGISTER</h3>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date of Birth</label>
                                <input type="date"  className="form-control" name="dob" value={data.dob} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Blood Group</label>
                                <select className="form-control" name="bldgrp" value={data.bldgrp} onChange={inputHandler}>
                                    <option value="-Select-">-Select-</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mobile No</label>
                                <input type="text" className="form-control" name="mobno" value={data.mobno} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Address</label>
                                <textarea className="form-control" name="address" value={data.address} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Pincode</label>
                                <input type="text" className="form-control" name="pin" value={data.pin} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">District</label>
                                <select className="form-control" name="dist" value={data.dist} onChange={inputHandler}>
                                    <option value="-Select-">-Select-</option>
                                    <option value="Kasargod">Kasargod</option>
                                    <option value="Kannur">Kannur</option>
                                    <option value="Kozhikode">Kozhikode</option>
                                    <option value="Wayanad">Wayanad</option>
                                    <option value="Malapuram">Malapuram</option>
                                    <option value="Thrissur">Thrissur</option>
                                    <option value="Palakad">Palakad</option>
                                    <option value="Eranakulam">Eranakulam</option>
                                    <option value="Idukki">Idukki</option>
                                    <option value="Alapuzha">Alapuzha</option>
                                    <option value="Kottayam">Kottayam</option>
                                    <option value="Pathanamthitta">Pathanamthitta</option>
                                    <option value="Kollam">Kollam</option>
                                    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Place</label>
                                <input type="text" className="form-control" name="place" value={data.place} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Username</label>
                                <input type="text" className="form-control" name="username" value={data.username} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" value={data.password} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" name="cpass" value={data.cpass} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                                <button className="btn btn-primary" onClick={readValue}>Register</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center><Link to='/'>Back to Login</Link></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register