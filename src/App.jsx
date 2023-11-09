import { useState } from 'react'
import ClassComponent from './components/ClassComponent'
import './App.css'
import Home from './pages/Home'
import { UserProvider } from './contexts/UserContent'
import { TodoProvider } from './contexts/TodoContext'
import Navbar from './components/Navbar'
import { withAuthorization } from './hocs/withAuthorization'
const ProtectedHome = withAuthorization(Home)
function App() {
  

  return (
    <>
      {/* <h1>Hello World</h1> */}
      {/* <ClassComponent /> */}
      <UserProvider>
        <TodoProvider>
          <Navbar />
          <ProtectedHome />
        </TodoProvider>
      </UserProvider>
    </>
  )
}

export default App
