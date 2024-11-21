import { useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import data from './assets/data.json'

function App() {
    return (
       <UserList users = {data}></UserList>       
    )
}

export default App