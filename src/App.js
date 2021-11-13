import React from "react";
import { Link,Route } from "react-router-dom";
import Home from "./Home";
import UsersList from "./UsersList";
import UserShow from "./UserShow";
import UserPosts from "./UserPosts";
import PostShow from "./PostShow";

const App=props=>{
  return (
    <div>
      <h1>Blogger</h1>
      <Link to='/'>Home</Link> |
      <Link to='/users'>Users</Link> |
      <Link to='/posts'>Posts</Link>
      
      <Route path='/' component={Home} exact={true}/>
      <Route path='/users' component={UsersList} exact={true}/>
      <Route path='/users/:id' component={UserShow}/>
      <Route path='/posts' component={UserPosts} exact={true}/>
      <Route path='/posts/:id' component={PostShow}/>
    </div>
  )
}

export default App;