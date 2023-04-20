import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const ResetPassword = () => {

    const [token, settoken] = useState("");

    const HandleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.get(`/ResetPassword`)
            console.log(res.data);
        }catch(err){
            console.log(err)
    }
}


    
return(
    <div className="reset">
        <h1>Reset Password</h1>
        <form>
            <input require="true" type="text" placeholder='password' name="password1"   /> 
            <br></br>
            <br></br>
            <input require="true" type="email" placeholder='password again'  name="password2"  />
            <br></br>
            <br></br>
            <button onClick={HandleSubmit}>Reset</button>
        </form>
    </div>
    );
};


export default ResetPassword