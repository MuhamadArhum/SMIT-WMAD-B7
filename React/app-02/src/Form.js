import React from 'react'
import * as yup from "yup"
export default function Form() {

  return (
    <div className='formfield'>
      <form>
        <h2>Student Record Management System</h2>
        
        <label>Name: </label>
        <input type='name' placeholder='Enter Your Name'/>

        <label>Email: </label>
        <input type='email' placeholder='type@gmail.com'/>

        <label>Age: </label>
        <input type='number' placeholder='Enter Your Age'/>
        
        <label>Contact: </label>
        <input type='text' placeholder='Enter Your Contact Number'/>
        <br/><br/>
        <button className='submit-button'>Add</button>
        </form>
        </div>

  )

}
