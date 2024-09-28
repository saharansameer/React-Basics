import React, { useEffect, useState } from "react"
import {Link, useLoaderData} from "react-router-dom"
import { getGitInfo } from "./loader.js";

function Github() {
    const data = useLoaderData();
    return (
        <>
            <div className="mx-auto">
                <div className="flex flex-col items-center my-10">
                    <Link
                    to={data.html_url}>
                        <img className="w-32 rounded-xl sm:w-40 lg:w-60 shadow-lg shadow-blue-600 mb-3" src={data.avatar_url} alt="" />
                    </Link>
                    <div className="font-semibold">{data.name}</div>
                    <div>Location: {data.location}</div>
                    <div>Followers: {data.followers}</div>
                    <div>Public Repos: {data.public_repos}</div>
                </div>
            </div>
        </>
    )
}

export default Github;