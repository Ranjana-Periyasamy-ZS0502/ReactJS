import '../App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard.jsx';

export default function UsersList() {

    const [users, setUsers] = useState([]);

   
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
    },[]);


    return (
        <div className='read-the-docs'>
            <h1>User Directory</h1>
            <span>No. of Users ({users.length})</span>            
            <ul>
            {
                users.map(user => (                    
                    <UserCard key={user.id} user={user}/>                    
                ))
            }  
            </ul>            
        </div>
    );

}