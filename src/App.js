import React from 'react'
import './stylesheets/app.css'
import Inputfeild from './components/Inputfield'
import Todolist from './components/Todolist'


function App() {
    return (
        <div>
            <div className="App">
                <Inputfeild />
                <Todolist />
            </div>
        </div>
    )
}

export default App
