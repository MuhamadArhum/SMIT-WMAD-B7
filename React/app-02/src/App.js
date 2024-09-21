import logo from './logo.svg';
import Form from './Form';
import ItemList from './ItemList';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([])


  useEffect(() =>{
    setData(Form)
  },[]);


const handleEdit = (id) =>{
  alert(id)
}


const handleDelete = (id) =>{
  if(id > 0){
    if(window.confirm("Are you Sure to Delete this item ?"));
    const dt = data.filter(item => item.id !== id);
    setData(dt);
  }
}

  return (
    <div className="App">
     <Form/>
     <ItemList data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
