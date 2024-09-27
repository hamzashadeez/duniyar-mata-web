import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import ReactTimeAgo from "react-time-ago";

function SinglePost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  // Get data
  const getPostData = async () => {
    const unsub = onSnapshot(doc(db, "posts", id), (doc) => {
      console.log( doc.data().time.toDate());
      setPost(doc.data());
    });
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className='h-screen overflow-auto'>
      <div className='px-4'>
        {loading && <div className='text-brand'>Loading...</div>}
      </div>

      {post && (
        <div className='px-5 mt-5'>
          <div className='flex items-center gap-1 mb-2 '>
            <p>12 Likes</p>
            <p>12 Comments</p>
            <p>12 Views</p>
            {/* <ReactTimeAgo date={post?.time} timeStyle="round-minute" locale="en-US" /> */}
          </div>
          <h1 className='text-2xl line-clamp-2 font-semibold text-brand'>
            {post?.title}
          </h1>
          <p className='text-lg line-clamp-3 font-semibold text-gray-600'>
            {post?.body}
          </p>
          <p className=' rounded py-1 text-gray-600 italic text-sm w-auto'>
            {post?.username}
          </p>
        </div>
      )}
    </div>
  );
}

export default SinglePost;
