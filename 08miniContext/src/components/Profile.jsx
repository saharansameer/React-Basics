import React, {useContext} from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const {user} = useContext(UserContext);

    if (!user) {
        return (
            <div className="text-white font-semibold">Please Login</div>
        )
    } else if (!user.username || !user.password) {
        return (
            <div className="text-white font-semibold">Please enter Username and Password both</div>
        )
    }
    return (
    <>
        <div className="text-white font-semibold">Welcome, {user.username}</div>
    </>
    )
}

export default Profile