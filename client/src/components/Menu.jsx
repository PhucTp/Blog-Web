import React from "react"

const Menu = () =>{
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
    return (
        <div className="menu">
            <h1>Other you may like</h1>
            {posts.map((post)=> (
                <div className="post" key={post.id}>
                    <img src={post.img} alt=""></img>
                    <h2>{post.title}</h2>
                    <button>Read Now</button>
                </div>
            ))}
        </div>
    )
}

export default Menu