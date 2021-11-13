import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const UserPosts=props=>{
    const [allpost,setAllpost]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
            .then((response)=>{
                const result=response.data
                setAllpost(result)
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
                    <h2>Total Posts - {allpost.length}</h2>
                    <ul>
                        {allpost.map((post)=>{
                            return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}
export default UserPosts