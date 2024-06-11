import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Add = () => {
    const [course, setData] = useState(
        {
            "ctitle": "",
            "date": "",
            "desc": "",
            "venue": "",
            "tname": "",
            "dur": ""
        }
    )

    const inputHandler = (event) => {
        setData({ ...course, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(course)
        axios.post("http://localhost:8885/add", course).then(
            (response) => {
                console.log(response.data)
                if (response.data.status === "success") {
                    alert("Successfully Added!")
                }
            }
        ).catch(
            (error) => {
                alert(error.message)
            }
        )
    }

    return (
        <div>
            <Nav/>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h3 class="card-title"><b>Add Course</b></h3>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Course Title :</label>
                                        <input type="text" className="form-control" name='ctitle' value={course.ctitle} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Date :</label>
                                        <input type="date" id="" className="form-control" name='date' value={course.date} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Venue :</label>
                                        <input type="text" className="form-control" name='venue' value={course.venue} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Description :</label>
                                        <textarea id="" className="form-control" name='desc' value={course.desc} onChange={inputHandler}></textarea>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Duration (Years) :</label>
                                        <input type="number" className="form-control" name='dur' value={course.dur} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Trainer Name :</label>
                                        <input type="text" className="form-control" name='tname' value={course.tname} onChange={inputHandler} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={readValue}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Add