import React from 'react';
import './index.css'

const BlogCard = ({ blog }) => {
    const date = new Date(blog.posted_on)

    return (
        <div className="card m-2" style={{ width: "18rem" }} id={blog.id}>
            <img src={blog.small_image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p>
                    <span>{blog.authorname} </span>
                    | {String(date.getDate()).padStart(2, '0')} {date.toLocaleString('default', { month: 'long' }).substr(0, 3)} {date.getFullYear()}</p>
                <p className="card-text">{blog.description}</p>
            </div>
        </div>
    );
}

export default BlogCard;