import { useState } from 'react'
import { STUDENTS } from './studentsList'
import Search from './components/Search'
import Error from './components/Error'
import ResidentsList from './components/ResidentsList'

// styles
import './App.css'

function App() {
  const [studentsList, setStudentsList] = useState(STUDENTS)
  const [residentsList, setResidentsList] = useState([])
  const [error, setError] = useState("")


  return (
    <div>
      <Search 
        studentsList={studentsList} 
        residentsList={residentsList} 
        setResidentsList={setResidentsList} 
        setError={setError}
      />
      <Error error={error}/>
      <ResidentsList residentsList={residentsList}/>
    </div>
  )
}

export default App
