import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedRole, setSelectedRole] = useState('');

  // const hasRun=useRef(false);

//   const handleLoadData=() => {
    
       
//        fetch('http://localhost:8080/user/loadData', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       body: JSON.stringify({}) // send empty body or required payload
//       })
//     .then(response => response.text())
//     .then(text => console.log('Response',text))
//     .catch(err => console.error('Fetch error:', err));
    
 
// };

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


  const handleSearch = () => {
    console.log('Searching for:', query);
    setLoading(true);
    fetch(`http://localhost:8080/user/keyword?keyword=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(json => {
        console.log('Results:', json.content); 
        setUsers(json.content);
        setLoading(false);                
    })
      .catch((error)=>{
        console.error(`Error fetching data: `,error);
        setError('Failed to fetch the data.');
        setLoading(false);
      });
  };


  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const wordCount = value.trim().split(/\s+/).length;
    if (wordCount >= 3) {
      handleSearch();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSort = () => {
    const sorted = [...filteredUsers].sort((a, b) =>
      sortOrder === 'asc' ? a.age - b.age : b.age - a.age
    );
    setFilteredUsers(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleRoleFilter = (e) => {
    const role = e.target.value;
    setSelectedRole(role);
    const filtered = role
      ? users.filter(user => user.role.toLowerCase() === role.toLowerCase())
      : users;
    setFilteredUsers(filtered);
  };

  if(loading)
  {
    return <p className='loading-class'>Loading...</p>
  }
  if(error)
  {
    return <p className='error-class'>{error}</p>
  }
  
  return (
    <div className="search-container" id="search-container">
      {/* <button onClick={handleLoadData}>Load Data to Backend</button> */}

     <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          className="search-input"
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      {users.length > 0 && (
        <div className="controls">
          <select className="role-filter" value={selectedRole} onChange={handleRoleFilter}>
            <option value="">All Roles</option>
            {[...new Set(users.map(user => user.role))].map((role, index) => (
              <option key={index} value={role}>{role}</option>
            ))}
          </select>
          <button className="sort-button" onClick={handleSort}>
            Sort by Age ({sortOrder === 'asc' ? '↑' : '↓'})
          </button>
        </div>
      )}

      <div className="user-grid">
        {filteredUsers.map((user, index) => (
          <div key={index} className="user-card">
            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>SSN:</strong> {user.ssn}</p>
          </div>
        ))}
      </div>

      
    </div>
  )
}

export default App
