import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8086/viewall").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="container">
                            <div className="row">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
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
                                            {data.map(
                                                (value,index)=>{
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
                                                </tr>
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll