import {useEffect, useState} from 'react';
import axios from 'axios';

const App=()=>{
  const [persons, setPersons] = useState([])
  useEffect( ()=>{
    const f= async () =>{
      const response = await axios.get("http://localhost:3000/posts");
      setPersons(response.data)
      console.log(response.data)
    }
    f();
  },[])
  return(
    <>
      {persons.map(person =>(
        <p>{person.id}</p>
      ))}
    </>
  )
}

export default App;
