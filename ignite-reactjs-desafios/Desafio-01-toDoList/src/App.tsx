import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { InputTask } from './components/InputTask'

function App() {
  return (
    <div className="App">
      <Header />
      <InputTask />
    </div>
  )
}

export default App
