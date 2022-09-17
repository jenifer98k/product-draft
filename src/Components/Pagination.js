import React from 'react'

const Pagination = ({postsPerPage,totalPosts,currentPage,prev,setCurrentPage,paginate}) => {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
pageNumbers.push(i)
    }
  return (
    <nav>
        <ul className="pagination">
            {pageNumbers.map(number=>(
               <li key={number} className="page-item">
               
         {/* <a href="!#" className='page-link' onClick={()=>paginate(number)}>
                  {number} </a>  */}
                     </li> 
                  
            ))} 
          
        </ul>
        <div className="grid gap-2 d-sm-block text-center ">
        <button href="!#" className='btn btn-info  m-5' onClick={() => setCurrentPage((currentPage) => currentPage - 1)}>
                    prev</button>

                    <button href="!#" className='btn btn-info m-5' onClick={() => setCurrentPage((currentPage) => currentPage + 1)}>
                   next</button>

        </div>
       
    </nav>
  )
}

export default Pagination
