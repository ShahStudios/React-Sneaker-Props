import React from 'react'

import './Post.css'

const Post = ({post: { title, img, body, author, releaseDate}}) => (
        <div className="post-container">
            <h1 className="heading">{title}</h1>
            <img className="image" src={img} alt="post" />
            <p>{body}</p>
            <div className="info">
                <h5>Release Date: {releaseDate}</h5>
                <h4>Author: {author}</h4>
            </div>
        </div>
    );

export default Post;