import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import dbService from "../appwrite/db_config";
import { Button } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (slug) {
      dbService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  const deletePost = () => {
    dbService.deletePost(post.$id).then((status) => {
      if (status) {
        dbService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };
  
  return post ? (
    <div className="py-8">
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
            <img
            src={dbService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
            />

            {isAuthor && (
            <div className="absolute right-6 top-6">
                <Link to={`/edit/${post.$id}`}>
                  <Button  text={"Edit"}/>
                </Link>
                <Button text={"Delete"} onClick={deletePost} />
            </div>
            )}
        </div>
        <div className="w-full mb-6">
            <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
    </div>
  ) : null;
}
