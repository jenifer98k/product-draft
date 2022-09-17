import React, { useEffect, useState } from "react"
import axios from "axios"
import Post from "./Post";
import Pagination from "./Pagination";
const UsingFetch = () => {
  const [users, setUsers] = useState([])
const [loading,setLoading]=useState(false);
const [currentPage,setCurrentPage]=useState(1);
const [postsPerPage,setPostsPerPage]=useState(5);
  
const fetchData = async () => {
  fetch("http://nammacart-dev-lb-1671514857.ap-south-1.elb.amazonaws.com:8080/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data.data);
      
      })
  
}
  useEffect(() => {
   
fetchData()
  },[])
console.log("users",users)
////-----------------------------------------Get Current posts ---------------------------------///////////////////////
 const indexOfLastPost=currentPage * postsPerPage;
 const indexOfFirstPost=indexOfLastPost - postsPerPage;
 const currentPosts=users.slice( indexOfFirstPost,indexOfLastPost)
 ///----------------------------------------Change page--------------------------------------------////////

 return (
   <div className="container mt-5">
    <h2 className=" mb-3">Products</h2>
 <Post users={currentPosts} loading={loading} />
 <Pagination postsPerPage={postsPerPage} 
 totalPosts={users.length} currentPage={currentPage}
 setCurrentPage={setCurrentPage}/>

</div>
  )
}

export default UsingFetch



