import React from 'react'

function PostComponent({data}) {
  console.log(data)
  return (
    <div className='bg-white shadow-sm mb-3 p-3'>
      <div className='flex items-center gap-1'>
        <p>12 Likes</p>
        <p>12 Comments</p>
        <p>12 Views</p>
      </div>
      <h1 className='text-2xl line-clamp-2 font-semibold text-brand'>{data?.title}</h1>
      <p className='text-lg line-clamp-3 font-semibold text-gray-600'>{data?.body}</p>
    </div>
  )
}

export default PostComponent