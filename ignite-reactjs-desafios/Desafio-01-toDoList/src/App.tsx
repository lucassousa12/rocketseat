import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { InputTask } from './components/InputTask'
import { Tasks } from './components/Tasks'

function App() {
  return (
    <div className="App">
      <Header />
      <InputTask />
      <Tasks />
    </div>
  )
}

export default App
