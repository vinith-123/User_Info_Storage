import React,{useState} from 'react';
import axios from 'axios';
import Userlist from './components/Userlist';
import {TextField,ButtonGroup,Button} from '@material-ui/core';
import './App.css';
const App = ()=>{
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sport, setSport] = useState('');
  const [users, setUsers] = useState([]);

  const onSubmit = (e)=>{
    axios.post('http://localhost:3001/api/insert',{
      name:name,
      age:age,
      sport:sport
    }).then((response)=>{
        console.log(response);
    })
  }
  const onHistory = (e)=>{
    axios.get('http://localhost:3001/api/get')
    .then((response)=>{
        setUsers(response.data);
    });
  }
  return (
    <div className='App'>
      <div>
        <label>Name:</label><br/>
        <TextField variant="outlined" onChange={(e)=>{setName(e.target.value)}} placeholder='Enter here..'/><br/>
        <label>Age:</label><br/>
        <TextField variant="outlined" onChange={(e)=>{setAge(e.target.value)}} placeholder='Enter here..'/><br/>
        <label>Favourite Sport:</label><br/>
        <TextField variant="outlined" onChange={(e)=>{setSport(e.target.value)}} placeholder='Enter here..'/><br/>
      </div>
      <div>
        <ButtonGroup variant="contained" color="primary">
          <Button onClick={onSubmit}>Add</Button>
          <Button onClick={onHistory}>History</Button>
        </ButtonGroup>
      </div>
      <div>
        <Userlist users={users}/>
      </div>
    </div>
  );
}
export default App;