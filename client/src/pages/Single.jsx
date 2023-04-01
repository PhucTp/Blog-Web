import React from "react"; 
import { Link } from "react-router-dom";
import Edit from "../img/edit.png" 
import Delete from "../img/delete.png"
import Menu from "../components/Menu";
const Single = () =>{
    return(
      <div className="single">
         <div className="content">
            <img src="https://assets.isu.pub/document-structure/221030100618-d0ff0387e4ea73ec6d6c180763b5e029/v1/d9285c486a57cc1abe2c9623c1b05d1d.jpeg" alt="" />
            <div className="user">
                <img src="https://img.meta.com.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-41.jpg" alt="" />
                <div className="info">
                    <span>Phuc Ngo</span>
                    <p>Posted 2 days ago</p>
                </div>
                <div className="edit">
                    <Link to ={`/write?edit=2`}>
                        <img src={Edit} alt="" />
                    </Link>
                    <img src={Delete} alt="" />
                </div>
            </div>   
            <h1>Hi helo bai</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nam perspiciatis doloremque vitae fugiat aliquam, harum quibusdam dignissimos ipsam eius assumenda. Quisquam repellendus similique ipsam sed laborum culpa pariatur velit.</p>
           <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab, distinctio unde impedit, odit itaque quae dolorum possimus nisi veniam nesciunt voluptates ducimus numquam eveniet magnam eaque cupiditate earum deleniti?<br/> 
        </div> 
        <Menu></Menu>
      </div>
    )
}
export default  Single