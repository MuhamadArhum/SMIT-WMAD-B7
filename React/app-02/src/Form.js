import React, { useState, useEffect } from 'react';

export default function Form({ onAddStudent, currentStudent }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    contact: ''
  });

  // Populate form data when a student is selected for editing
  useEffect(() => {
    if (currentStudent) {
      setFormData(currentStudent);
    } else {
      setFormData({ name: '', email: '', age: '', contact: '' });
    }
  }, [currentStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);  // Send form data to parent (App component)
    setFormData({ name: '', email: '', age: '', contact: '' }); // Clear form after submission
  };

  return (
    <div className='formfield'>
      <form onSubmit={handleSubmit}>
        <h2>Student Record Management System</h2>
        <br />
        <label>Name: </label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Enter Your Name' />

        <label>Email: </label>
        <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='type@gmail.com' />

        <label>Age: </label>
        <input type='number' name='age' value={formData.age} onChange={handleChange} placeholder='Enter Your Age' />

        <label>Contact: </label>
        <input type='text' name='contact' value={formData.contact} onChange={handleChange} placeholder='Enter Your Contact Number' />
        <br /><br />
        <button className='submit-button' type='submit'>
          {currentStudent ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
}
