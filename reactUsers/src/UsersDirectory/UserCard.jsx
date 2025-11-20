import {Link} from 'react-router-dom';
import '../App.css';

export default function UserCard({user}) {

    return(
        <div className='userCard'>
            <Link to={`/user/${user.id}`}>
            <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p> 
            </div> 
            </Link>
        </div>
    )
}