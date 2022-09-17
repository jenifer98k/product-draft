import {React,useState} from 'react'

const Post = ({users,loading,number,paginate}) => {
 

//if(loading){
 // return <h2>Loading...</h2>
//}


  return (<div className='container' >

    {  users.length>0 && (
      <ul className='list-group list-group-horizontal'>
   { users.map(user=>(
<li key={user.id} className='list-group-item card-group'>

<div className='card m-10'   >
<img src={user.image} className="card-img-top" alt="..." />
{/*<span className='quote-icon'>
   <FaQuoteRight/>
 </span>*/ } 
<div class="card-body">
 <h4 class="card-title">{user.name}</h4>
 <p class="card-text">{user.brandName}</p>
 <div className="card-footer">
 <a key={number} className='btn btn-primary' href='!#' onClick={()=>paginate(number)}>explore</a>
 </div>

</div></div>
</li>
 ))}
  </ul>
    )}
     </div>
  )
}

export default Post
