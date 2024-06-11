import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const View = () => {
  const [course, setData] = useState([])
  const fetchData = () => {
    axios.get("http://localhost:8885/view").then(
      (response) => {
        setData(response.data)
      }
    ).catch(
      (error) => {
        alert(error.message)
      }
    )
  }
  useEffect(() => { fetchData() }, [])
  return (
    <div>
        <Nav/>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Course List</h5>
          <p></p>
          <div className="container">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Course Title</th>
                      <th scope="col">Trainer Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Date</th>
                      <th scope="col">Venue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      course.map(
                        (value, index) => {
                          return <tr>
                            <td>{value.ctitle}</td>
                            <td>{value.tname}</td>
                            <td>{value.desc}</td>
                            <td>{value.dur}</td>
                            <td>{value.date}</td>
                            <td>{value.venue}</td>
                          </tr>
                        }
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View