<<<<<<< HEAD
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
=======
import React from "react"
import {Link} from "react-router-dom";
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"  
import Menu from "../components/Menu";

const Single = () =>{
    return(
        <div className="single">
            <div className="content">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt="" ></img>
                <div className="user">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt=""></img>
                    <div className="info">
                        <span>Long</span>
                        <p>Post 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/Write?edit=2`}>
                            <img src={Edit} alt=""></img>
                        </Link>
                        <img src={Delete} alt=""></img>
                    </div>
                </div>
                <h1>at ultrices mi tempus He Lo I M S UP MAN</h1>
                <p>suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit 
                    <br></br><br></br>scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo<br></br><br></br> in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
            </div>
            <Menu> </Menu>
        </div>
>>>>>>> 65c114461945ce5bd5f3ce211b9ca63cb6e52ada
    )
}
export default  Single