import react, {useState} from 'react';
import {login} from "../../services/auth.service.js";
import {jwtDecode} from "jwt-decode";
import {setToken, setUser} from "../../services/storage.service.js";
import {useNavigate} from "react-router-dom";

const Login = ({message}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const data = await login(email, password);
            setToken(data.token)

            const user = jwtDecode(data.token)
            setUser(user)

            navigate("/");

        } catch (err) {
            setError("Invalid credentials");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{maxWidth: 300}}>
            <h2>Login</h2>
            <p>{message ?? "no message"}</p>
            {error && <p style={{color: "red"}}>{error}</p>}
            <div>
                <label>Email:</label><br/>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label><br/>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" style={{marginTop: 10}}>Login</button>
        </form>
    )
}

export default Login;