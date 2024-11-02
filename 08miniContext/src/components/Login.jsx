import React, {useState, useContext} from "react"
import UserContext from "../context/UserContext";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    };
    
    return (
    <>
        <div className="bg-orange-400 flex flex-col items-center max-w-60 gap-5 p-3 rounded-lg">
            <h2 className="text-white font-semibold text-2xl">Login</h2>
            <input type="text" 
            className="rounded-lg p-2"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>

            <input type="password" 
            className="rounded-lg p-2"
            placeholder="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>

            <button className="text-white bg-zinc-700 px-3 py-1 rounded-xl hover:bg-zinc-800" onClick={handleSubmit}>Submit</button>

        </div>
        
    </>
    )
}

export default Login