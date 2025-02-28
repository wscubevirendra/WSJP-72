import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
  const [users, Setusers] = useState([])
  const [userDetails, SetUserDetails] = useState(null)
  const notify = (msg, flag) => toast(msg, { type: flag ? 'success' : 'error' });

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      contact: e.target.contact.value,
    }
    let API;
    if (userDetails == null) {
      API = axios.post("http://localhost:5000/user/register", data);

    } else {
      API = axios.put("http://localhost:5000/user/update/" + userDetails._id, data);
    }
    API.then(
      (response) => {
        notify(response.data.msg, response.data.status);
        if (response.data.status == 1) {
          e.target.reset()
          getUser()
          SetUserDetails()

        }
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }

  const statusHandler = (id) => {
    axios.patch("http://localhost:5000/user/status-update/" + id).then(
      (response) => {
        notify(response.data.msg, response.data.status);
        if (response.data.status == 1) {
          getUser()
        }
      }

    ).catch(
      (error) => {
        console.log(error)
      }

    )
  }

  const deleteHanlder = (id) => {
    axios.delete("http://localhost:5000/user/delete/" + id).then(
      (response) => {
        notify(response.data.msg, response.data.status);
        if (response.data.status == 1) {
          getUser()
        }
      }

    ).catch(
      (error) => {
        console.log(error)
      }

    )
  }

  const getUser = () => {
    axios.get("http://localhost:5000/user").then(
      (response) => {
        if (response.data.status == 1) {
          Setusers(response.data.users)
        }
      }

    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }


  useEffect(
    () => {
      getUser()
    },
    []
  )




  return (
    <>

      <ToastContainer />
      <div className='grid grid-cols-7 gap-2 p-[10px]'>

        <div className='bg-white p-6  col-span-2 rounded-lg shadow-lg mb-6'>
          <h2 className='text-2xl font-bold text-center mb-4'>Register</h2>
          <form onSubmit={submitHandler}>
            <div className='mb-4'>
              <label className='block text-gray-700'>Name</label>
              <input
                type='text'
                name='name'
                defaultValue={userDetails?.name}
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your name'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Email</label>
              <input
                type='email'
                name='email'
                defaultValue={userDetails?.email}
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your email'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Contact</label>
              <input
                type='tel'
                name='contact'
                defaultValue={userDetails?.contact}
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your contact number'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Password</label>
              <input
                type='password'
                name='password'
                defaultValue={userDetails?.password}

                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your password'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition'
            >
              Submit
            </button>
          </form>
        </div>
        <div className='col-span-5 bg-white p-2 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-bold text-center mb-4'>User Data</h2>
          <table className='w-full border-collapse border border-gray-300'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border border-gray-300 px-4 py-2'>Name</th>
                <th className='border border-gray-300 px-4 py-2'>Email</th>
                <th className='border border-gray-300 px-4 py-2'>Contact</th>
                <th className='border border-gray-300 px-4 py-2'>Status</th>
                <th className='border border-gray-300 px-4 py-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((data, index) => {

                  return (
                    <tr key={index}>
                      <td className='border border-gray-300 px-4 py-2'>{data.name}</td>
                      <td className='border border-gray-300 px-4 py-2'>{data.email}</td>
                      <td className='border border-gray-300 px-4 py-2'>{data.contact}</td>
                      <td className='border border-gray-300 px-4  py-2'>
                        {
                          data.status ?
                            <button onClick={() => statusHandler(data._id)} className='bg-yellow-500 text-white px-2 py-1 rounded'> Active</button>
                            :
                            <button onClick={() => statusHandler(data._id)} className='bg-blue-500 text-white px-2 py-1 rounded'> In-active</button>



                        }

                      </td>
                      <td className='border border-gray-300 px-4 py-2 flex gap-2'>
                        <button onClick={() => SetUserDetails(data)} className='bg-green-500 text-white px-2 py-1 rounded'>Edit</button>
                        <button onClick={() => deleteHanlder(data._id)} className='bg-red-500 text-white px-2 py-1 rounded'>Delete</button>

                      </td>
                    </tr>
                  )
                })
              }


            </tbody>
          </table>
        </div>
      </div>
    </>

  );
}
