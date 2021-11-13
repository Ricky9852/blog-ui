import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const UsersList=props=>{
    const [users,setUsers]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                const result=response.data
                setUsers(result)
                setIsLoading(false)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])
    return (
        <div>
            { isLoading ? 
            (<p>Loading...</p>) :
            (
                <div>
                    <h1>Listing Users - {users.length}</h1>
                    <ol>
                        {users.map((user)=>{
                            return <li key={user.id}><Link to={`/users/${user.id}`} >{user.name}</Link></li>
                        })}
                    </ol>
                </div>
            )}
        </div>
    )
}
export default UsersList;