import { useState ,useEffect} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState(null);
  useEffect(()=>{
    axios.get('http://localhost:5000/api')
    .then(response=>setData(response.data))
    .catch(error=>console.error('ERROR',error));
  },[])

  return (
    <>
    <div className='App'>
      <h1>My FullStack APP</h1>
      {data?(
        <div>
          <p>Message:{data.message}</p>
          <p>Status:{data.status}</p>
        </div>

      ):(
        <p>Loading....</p>
      )}
    </div>
      
    </>
  )
}

export default App
