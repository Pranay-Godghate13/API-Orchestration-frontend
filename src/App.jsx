import { useEffect, useRef, useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import Controls from './Components/Controls'
import UserGrid from './Components/UserGrid'
import ErrorFallback from './Components/ErrorFallback'


function App() {
  
 
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedRole, setSelectedRole] = useState('');


  useEffect(() => {
    
       
       fetch('http://localhost:8080/user/loadData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({}) // send empty body or required payload
      })
    .then(response => response.text())
    .then(text => console.log('Response',text))
    .catch(err => console.error('Fetch error:', err));
    
 
},[]);


  

  
  return (
    <div className="search-container" id="search-container">
      {/* <button onClick={handleLoadData}>Load Data to Backend</button> */}
      {/* HEADER */}
      <Header />
      <SearchBar query={query}
          setQuery={setQuery}
          users={users}
          setUsers={setUsers}
          loading={loading}
          setLoading={setLoading}
          error={error}
          setError={setError}
          />
     

      <Controls users={users}
  filteredUsers={filteredUsers}
  setFilteredUsers={setFilteredUsers}
  sortOrder={sortOrder}
  setSortOrder={setSortOrder}
  selectedRole={selectedRole}
  setSelectedRole={setSelectedRole}/>

     <UserGrid filteredUsers={filteredUsers}
               setFilteredUsers={setFilteredUsers}/>

    <ErrorFallback error={error}
      loading={loading}/>
      
    </div>
  )
}

export default App
