import { useState } from 'react'
function Controls({
  users,
  filteredUsers,
  setFilteredUsers,
  sortOrder,
  setSortOrder,
  selectedRole,
  setSelectedRole
}) {
    // const [users, setUsers] = useState([]);
    // const [sortOrder, setSortOrder] = useState('asc');
    // const [selectedRole, setSelectedRole] = useState('');

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
    return (
        <div>
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
        </div>
        
    );
}

export default Controls;