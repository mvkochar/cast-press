import React from 'react'
import './css/Blog.css'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <>
            <main className='blog-main'>
                <h1 className="blog-main-title">Blog</h1>
                <div className="blog-content d-f">
                    <div className="blog-item d-f">
                        <div><img src="/images/home-post1.png" alt="post1" /></div>
                        <div>
                            <h3 className="blog-item-title">How to create your own podcast cover art?</h3>
                            <p className="blog-item-date">Dec 4, 2019</p>
                            <Link to= "/post/0" className="blog-item-more">Read More</Link>
                        </div>
                    </div>
                    <div className="blog-item d-f">
                        <div><img src="/images/home-post2.png" alt="post2" /></div>
                        <div>
                            <h3 className="blog-item-title">How to create your own podcast cover art?</h3>
                            <p className="blog-item-date">Dec 4, 2019</p>
                            <Link to= "/post/1" className="blog-item-more">Read More</Link>
                        </div>
                    </div>
                    <div className="blog-item d-f">
                        <div><img src="/images/home-post1.png" alt="post1" /></div>
                        <div>
                            <h3 className="blog-item-title">How to create your own podcast cover art?</h3>
                            <p className="blog-item-date">Dec 4, 2019</p>
                            <Link to= "/post/0" className="blog-item-more">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="blog-pagination d-f">
                    <button className='pagination-btn'>1</button>
                    <button className='pagination-btn'>2</button>
                    <button className='pagination-btn'>3</button>
                    <button className='pagination-btn'>...</button>
                    <button className="pagination-btn pagination-action">
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0696945 0.960613C0.0250896 0.913679 0 0.84979 0 0.78314C0 0.716491 0.0250896 0.652602 0.0696945 0.605667L0.569198 0.0757478C0.611955 0.0274165 0.67165 0 0.734129 0C0.796607 0 0.856303 0.0274165 0.899059 0.0757478L5.22966 4.67005C5.29596 4.7403 5.33325 4.8356 5.33333 4.93501V5.06499C5.33325 5.1644 5.29596 5.2597 5.22966 5.32995L0.899059 9.92425C0.856303 9.97258 0.796607 10 0.734129 10C0.67165 10 0.611955 9.97258 0.569198 9.92425L0.0696945 9.39433C0.0250896 9.3474 0 9.28351 0 9.21686C0 9.15021 0.0250896 9.08632 0.0696945 9.03939L3.87723 5L0.0696945 0.960613Z" fill="#555555" />
                        </svg>
                    </button>
                </div>
            </main>
        </>
    )
}

export default Blog