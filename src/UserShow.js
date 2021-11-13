import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const UserShow=props=>{
    const {id}=props.match.params
    const [user,setUser]=useState([])
    const [posts,setPosts]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        Promise.all([axios.get(`http://jsonplaceholder.typicode.com/users/${id}`),axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)])
            .then((values)=>{
                const [userResponse,postResponse]=values
                setUser(userResponse.data)
                setPosts(postResponse.data)
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
                    <h2>Username - {user.name}</h2>
                    <ul>
                        {posts.map((post)=>{
                            return <li key={post.id}><Link to={`/posts/${post.id}`} >{post.title}</Link></li>
                        })}
                    </ul>
                    <Link to='/users'>back</Link>
                </div>
            )}
        </div>
    )
}
export default UserShow;