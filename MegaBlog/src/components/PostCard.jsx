import React from "react";
import dbService from "../appwrite/db_config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <>
      <Link to={`/posts/${$id}`}>
        <div className="">
          <div>
            <img src={dbService.getFilePreview(featuredImage)} 
            />
          </div>
          <h2 className="text-3xl dark:text-white">{title}</h2>
        </div>
      </Link>
    </>
  );
}

export default PostCard;
