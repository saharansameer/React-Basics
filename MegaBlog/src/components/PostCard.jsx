import React from "react";
import dbService from "../appwrite/db_config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage, userName, status }) {
  return (
    <>
      <Link to={`/posts/${$id}`}>
        <div className={ `${status ? "" : "opacity-[0.5]"} p-5 rounded-lg bg-[#bdbdbd] dark:bg-[#2b2b2b]`}>
          <div>
            <img className="rounded-sm hover:shadow-black hover:shadow-md dark:shadow-[#FDF3C5] transition-all ease-in-out" src={dbService.getFilePreview(featuredImage)} 
            />
          </div>
          <div className='mt-3 h-[1px] bg-[#000000] dark:bg-[#f1f1f1]'></div>
          <h2 className="text-md sm:text-lg md:text-xl font-mono dark:text-white">{title}</h2>
          <h3 className="text-sm font-bold dark:text-white">by {userName}</h3>
        </div>
      </Link>
    </>
  );
}

export default PostCard;
