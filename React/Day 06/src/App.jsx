import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";


export default function App() {
  const [user, Setuser] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.userName.value,
      email: e.target.userEmail.value,
      contact: e.target.userContact.value,
      password: e.target.password.value
    }

    if (!data.name || !data.email || !data.contact || !data.password) {
      alert("All field required")
      return

    }

    Setuser([...user, data])
    e.target.reset()

  }

  function deleteHanlder(delIndex) {
    const newData = user.filter(
      (d, index) => {
        return index != delIndex ? true : false
      }
    )
    Setuser(newData)

  }



  return (
    <>
      <div className="container my-5">
        <h2 className="text-center mb-4"> Form and Table Example</h2>
        {/* Form Section */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">
            <h5>Form</h5>
          </div>
          <div className="card-body">
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name='userName'
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="userEmail"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="userContact"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <div>
                <FaEyeSlash />

                </div>

              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* Table Section */}
        <div className="card">
          <div className="card-header bg-secondary text-white">
            <h5>Table</h5>
          </div>
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  user.map((data, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.contact}</td>
                        <td>{data.password}</td>
                        <td onClick={() => deleteHanlder(i)} className='btn bg-primary text-light'>Delete</td>
                      </tr>
                    )
                  })
                }



              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Bootstrap JS */}
    </>

  )
}
