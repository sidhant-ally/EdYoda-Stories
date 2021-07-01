import React from 'react';
import { FILTER_IMG, CATEGORIES, POSTS } from '../../utils/constants'
import BlogCard from '../BlogCard'
import './index.css'

const LatestPostSection = () => {
    return (
        <div className="latest-body">
            <h3>Latest Posts</h3>
            <div id="latest-filter">
                <img alt="Filter Icon" src={FILTER_IMG} style={{ width: '25px', height: '25px' }} />
                <h6>Filter by Category</h6>
            </div>
            <div class="category-list">
                {CATEGORIES.map(({ title }, index) => {
                    if (index === 0)
                        return <div class="category-item selected">{title}</div>
                    return <div class="category-item">{title}</div>
                })}
            </div>
            <div class="blog-list">
                {POSTS.map(blog => <BlogCard blog={blog} />)}
            </div>
        </div>
    );
}

export default LatestPostSection;