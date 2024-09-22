import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form';
import ItemList from './ItemList';
import './App.css';

function App() {
  const [data, setData] = useState([
    {
      id : uuidv4,
      name: 'Ali',
      email: 'ali123@gmail.com',
      age: 20,
      contact: '12341224312'
    },
    {
      id: uuidv4,
      name: 'Rizwan',
      email: 'rizwan123@gmail.com',
      age: 21,
      contact: '22341224312'
    },
    {
      id: uuidv4,
      name: 'Raza',
      email: 'raza123@gmail.com',
      age: 30,
      contact: '12341554312'
    }
  ]);

  const [currentStudent, setCurrentStudent] = useState(null);

  const handleAddStudent = (student) => {
    if (currentStudent) {
      // Edit existing student
      const updatedData = data.map(item =>
        item.id === currentStudent.id ? { ...student, id: currentStudent.id } : item
      );
      setData(updatedData);
      setCurrentStudent(null); // Clear the current student after editing
    } else {
      // Add new student
      const newStudent = { ...student, id: data.length + 1 };
      setData([...data, newStudent]);
    }
  };

  const handleEdit = (id) => {
    const studentToEdit = data.find(student => student.id === id);
    setCurrentStudent(studentToEdit); // Pass the student data to the form for editing
  };

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure you want to delete this item?")) {
        const dt = data.filter(item => item.id !== id);
        setData(dt);
      }
    }
  };

  return (
    <div className="App">
      <Form onAddStudent={handleAddStudent} currentStudent={currentStudent} />
      <ItemList data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
