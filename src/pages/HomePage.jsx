import React, { useEffect, useState } from "react";
import { getAllPosts } from "../controllers/postControllers";
import PostComponent from "../components/PostComponent";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);

    try {
      const tempData = [];
      const q = query(collection(db, "posts"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          tempData.push(doc.data());
        });
        setPosts(tempData);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='h-screen overflow-auto  mt-5'>
      <div className='px-4'>
        {loading && <div className='text-brand'>Loading...</div>}
      </div>
      {posts.map((data, i) => {
        return <PostComponent data={data} key={i} />;
      })}
    </div>
  );
}

export default HomePage;
