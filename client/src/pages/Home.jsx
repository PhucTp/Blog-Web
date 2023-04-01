<<<<<<< HEAD
import React from "react";  
import {Link} from "react-router-dom"

const Home = () => {
    const posts = [ 
        {
            id: 1,
            title: "Post 1",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ,
            img: "https://hinhgaixinh.com/wp-content/uploads/2021/10/hinh-gai-xinh-7-min-1.jpg",
            
        },
        {
            id: 2,
            title: "Post 2",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: "https://gaixinhbikini.com/wp-content/uploads/2022/09/52322409115_e6cc6db4a5_o.jpg"
        },
        {
            id: 3,
            title: "Post 3",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: "https://tinhayvip.com/wp-content/uploads/2022/01/anh-gai-sexy-anh-gai-viet-quyen-ru-bong-mat-8.jpg",
        },
        {
            id: 4,
            title: "Post 4",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: "https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-17.jpg",
        }
    ];
    return (
        <div className="home">
            <div className="posts">
                {posts.map((post)=>(
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1> 
                            </Link>
                                <p>{post.body}</p>  
                                <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
=======
import React from "react"; 
import {Link} from "react-router-dom";
const Home = () => {
    const posts = [
        {
            id: 1,
            title: "at ultrices mi tempus He Lo I M S UP MAN",
            desc: "lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras ",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
        },
        {
            id: 2,
            title: "at ultrices mi tempus He Lo I M S UP MAN",
            desc: "lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras ",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
        },
        {
            id: 3,
            title: "at ultrices mi tempus He Lo I M S UP MAN",
            desc: "lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras ",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
        },
        {
            id: 4,
            title: "at ultrices mi tempus He Lo I M S UP MAN",
            desc: "lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras ",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
        },    
    ];
    return(
        <div className='home'>
            {posts.map(post => (
                <div className='post' key={post.id}> 
                    <div className="img">
                        <img src={post.img} alt=""></img> 
                    </div>
                    <div className="content">
                    <Link className="link" to={`/post/${post.id}`}>
                            <h1>{post.title}</h1>
                    </Link>
                    <p>{post.desc}</p>
                    <button>Read More</button>
                    </div>
                </div>
            ))}
>>>>>>> 65c114461945ce5bd5f3ce211b9ca63cb6e52ada
        </div>
    )
}
export default Home