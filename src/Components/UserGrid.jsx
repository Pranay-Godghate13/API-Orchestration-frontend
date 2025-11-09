import { useState } from 'react'
function UserGrid({filteredUsers, setFilteredUsers}) 
{
//  const [filteredUsers, setFilteredUsers] = useState([]);
 return (
    <div>
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
    
 );   
}

export default UserGrid;
