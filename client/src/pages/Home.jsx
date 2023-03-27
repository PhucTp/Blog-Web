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
        </div>
    )
}
export default Home