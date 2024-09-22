import React from 'react';

export default function ItemList({ data, handleEdit, handleDelete }) {
  return (
    <div className='itemlist'>
      <h3>Admitted Student List</h3>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Contact No</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>{item.contact}</td>
              <td>
                <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</button>
                <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
