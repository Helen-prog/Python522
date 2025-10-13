import Users from './components/users/Users';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users', {
          headers: {
            'x-api-key': 'reqres-free-v1'
          }
        })
          .then(res => res.json())
          .then(data => console.log(data))
  })

  return (
    <div className="main">
      <Users items={users} />
    </div>
  );
}

export default App;
