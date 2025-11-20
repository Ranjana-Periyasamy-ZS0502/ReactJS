import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="user-details">
    <hr />
      <h2>{user.name}</h2>
    <hr/>
    <div className="user-info">
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>City:</strong> {user.address.city}</p>
    </div>
      <br />
      <Link to="/">← Back to Home</Link>
    </div>
  );
}
