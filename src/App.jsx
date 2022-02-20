import { useState, useRef, useEffect } from 'react'
import BlogPost from "./components/blogPost"
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef(null)
  const [myName, setMyName] = useState("Dat")
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello My name is {myName}</p>
        <input placeholder='Enter something' ref={inputRef} />
        <button onClick={() => setMyName(inputRef.current.value)}>Set name</button>
        <BlogPost />
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
