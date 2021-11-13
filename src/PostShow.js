import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const PostShow=props=>{
    const {id}=props.match.params
    const [user,setUser]=useState([])
    const [userid,setUserid]=useState('')
    const [post,setPost]=useState([])
    const [comments,setComments]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        Promise.all([axios.get(`http://jsonplaceholder.typicode.com/posts?id=${id}`),axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)])
            .then((values)=>{
                const [postResponse,commentResponse]=values
                const result=postResponse.data
                setPost(result[0])
                setUserid(result[0].userId)
                setComments(commentResponse.data)
                setIsLoading(false)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])
    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/users/${userid}`)
            .then((response)=>{
                const result=response.data
                setUser(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[userid])
    return (
        <div>
            { isLoading ? 
            (<p>Loading...</p>) :
            (
                <div>
                    <h1>Name : {user.name}</h1>
                    <h1>Title : {post.title}</h1>
                    <h2>Body : {post.body}</h2><hr/>
                    <h1>Comments</h1>
                    <ul>
                        {comments.map((comment)=>{
                            return <li key={comment.id}>{comment.name}</li>
                        })}
                    </ul><hr/>
                    <p><Link to={`/users/${user.id}`}>More works by this user</Link></p>
                </div>
            )}
        </div>
    )
}
export default PostShow