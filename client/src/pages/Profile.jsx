import React from 'react';
//import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from 'axios';


const Profile = () => {

     
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [ username, setUsername ] = useState("");
  const [email, setEmail ] = useState("");
  const [editing, setEditing] = useState(false);
  const [file, setFile] = useState(null);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    setEditing(false);

    try{
        await axios.put(`/users/${currentUser.id}`, {
            username,
            email,
            img: file ? imgUrl : "",
          })
       // await saveinfo({username, email, img: file ? imgUrl : "",})
    
        console.log('Saving profile...'); 
    }
    catch(err) 
    {
        console.log(err);
    }
  };

  const handleCancelEdit = () => {
    setEditing(false);
    console.log('Canceling edit...');
  };

  useEffect(() => {
    const fetchData = async () => {
        const id = currentUser.id;
      try {
        const res = await axios.get(`/users/${id}`);
        console.log(res);
        setCurrentUser(res.data);

      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [setCurrentUser]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    
    try{
      const res = await axios.post(`/users/resetPasswordEmail`,{email : currentUser.email});
    }catch(err){
      console.log(err);
    }
  };

  return (
    <div className="profile">
      <div className="profile-image">
        <img src={`../upload/${currentUser?.img}`} alt="Profile" />
      </div>
      <div className="profile-info">
      {editing ? (
          <>
          <div className="profileform">
          <label htmlFor="username-input">Username:</label>
            <input 
                id="username-input" type="text" value={username} onChange={handleUsernameChange} 
            />
            <label htmlFor="email-input">Email:</label>
            <input
                 id="email-input" type="email" value={email} onChange={handleEmailChange} 
            />
            <label className="file" htmlFor="file">
                Image:
            </label>
            
            <input className='inputfile'
                tyle={{ display: "none" }}
                type="file"
                id="file"
                name=""
                onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
      
            <div className="ButtonsSF">              
              <button className='bsf' onClick={handleSaveProfile}>Save Profile</button>
              <button className='bsf' onClick={handleCancelEdit}>Cancel</button>
            </div>
          </>
        ) : (
          <>
          <div className="info">
            <h1>{currentUser.username}</h1>
            <p>{currentUser.email}</p>
            <div className="buttons">
            <button onClick={handleEditProfile}>Edit Profile</button>
            <button onClick={handleChangePassword}>Change Password</button>
            </div>
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;