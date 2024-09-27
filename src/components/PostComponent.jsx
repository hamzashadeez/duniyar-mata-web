import React from 'react'
import { Link } from 'react-router-dom'

function PostComponent({data}) {
  console.log(data)
  return (
    <Link to={`/post/${data?.id}`}>
      <div className='bg-white shadow-sm mb-3 p-3'>
        <div className='flex items-center gap-1 mb-2 '>
          <p>12 Likes</p>
          <p>12 Comments</p>
          <p>12 Views</p>
        </div>
        <h1 className='text-2xl line-clamp-2 font-semibold text-brand'>{data?.title}</h1>
        <p className='text-lg line-clamp-3 font-semibold text-gray-600'>{data?.body}</p>
        <p className=' rounded py-1 text-gray-600 italic text-sm w-auto'>{data?.username}</p>
      </div>
    
    </Link>
  )
}

export default PostComponent