import { useState } from 'react'


function SearchBar({query,setQuery,users,setUsers,loading,setLoading,error,setError}) 
{
    // const [query, setQuery] = useState('');
    // const [users, setUsers] = useState([]);
    // const [loading,setLoading]=useState(false);

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

    return (
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
    )
    
}

export default SearchBar;