import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setjokes] = useState([])

  //  for proxy usage

  // useEffect(() => {
  //   axios.get('/api/jokes')
  //     .then(response => setjokes(response.data))
  // }, [])

  //  FOR the use case of CORS

  useEffect(() => {
    axios.get('http://localhost:3000/api/jokes')
      .then(response => setjokes(response.data))
  }, [])

  return (
    <div>
      <h1>Jokes are give bellow</h1>
      <h2>jokes:{jokes.length}</h2>
      {
        jokes.map((j, i) => (
          <div key={j.id}>
            <div>{j.title}</div>
            <div>{j.content}</div>
          </div>
        ))
      }

    </div>
  )
}

export default App
