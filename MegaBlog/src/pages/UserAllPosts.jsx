import React, { useEffect, useState } from 'react'
import { PostCard } from '../components';
import dbService from "../appwrite/db_config";
import { useSelector } from 'react-redux';

function UserAllPosts() {
    const userData = useSelector((state) => state.auth.userData);
    const authStatus = useSelector((state) => state.auth.status);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await dbService.getUserAllPosts(userData.$id);
            console.log(data)
            if (data) setPosts(data.documents);
        };

        fetchPosts();
    }, 
    [authStatus]);

  return posts.length > 0 ? (
    <div className='w-full py-8'>
    <div className='flex flex-wrap justify-center gap-5 sm:gap-20'>
      {posts.map((post) => (
        <div key={post.$id} className='p-2 min-w-64 w-64 lg:w-80'>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  </div>
  ) : (
    <div className='w-full py-8 dark:text-white text-center'>
        <h1 className='text-4xl font-bold py-5'>wow! such an empty</h1>
        <h1 className='font-semibold'>You dont have created any post</h1>
    </div>
  )
}

export default UserAllPosts