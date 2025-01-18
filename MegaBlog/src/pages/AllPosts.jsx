import React, {useEffect, useState} from 'react';
import { PostCard } from '../components';
import dbService from "../appwrite/db_config";
import { setPosts } from '../features/post/postSlice';
import { useSelector, useDispatch } from 'react-redux';
function AllPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await dbService.getAllPosts();
      if (data) dispatch(setPosts(data.documents));
    }

    fetchPosts();
  }, [dispatch]);

  return (
  <div className='w-full py-8'>
    <div className='flex flex-wrap'>
      {posts.map((post) => (
        <div key={post.$id} className='p-2 w-1/4'>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  </div>
  )
}

export default AllPosts;