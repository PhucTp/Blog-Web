import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
      });
      //const [err, setError] = useState(null);
    
      const navigate = useNavigate();

      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("/auth/register", inputs);
          console.log(inputs.username);
          console.log(res)

          //navigate("/login");
        } catch (err) {
          console.log(err);
          //setError(err.response.data);
        }
      };

    return(
    <div className="auth">
        <h1>Register</h1>
        <form>
            <input require="true" type="text" placeholder='username' name="username" onChange={handleChange}  /> 
            <input require="true" type="email" placeholder='email'  name="email" onChange={handleChange} />
            <input require="true" type="password" placeholder='password' name="password" onChange={handleChange} /> 
            <button onClick={handleSubmit}>Register</button>
            <p>This is an error!</p>
            <span>Don't you have an account <Link to="/login">Login</Link></span>
        </form>
    </div>
    )
    
}
export default Register