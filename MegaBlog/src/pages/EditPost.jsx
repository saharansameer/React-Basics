import React, {useEffect, useState} from 'react';
import { PostForm } from "../components";
import { useNavigate, useParams } from 'react-router-dom';
import dbService from '../appwrite/db_config';

function EditPost() {
    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            dbService.getPost(slug).then((post) => {
                if (post) setPost(post);
            });
        } else {
            navigate("/");
        }
    }, 
    [slug, navigate]);

  return post ? (
    <div className='w-full py-20'>
        <PostForm post={post} />
    </div>
  ) : null;
}

export default EditPost