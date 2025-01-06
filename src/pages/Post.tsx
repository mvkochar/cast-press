import React from 'react'
import './css/Post.css'
import { Link, useParams } from 'react-router-dom'

const Post = () => {
    const { id } = useParams<string>()
    let a = id ? id : '0'
    let index = parseInt(a)

    return (
        <>
            <main className='post-main'>
                <div><img src={`/images/home-post${index + 1}.png`} alt="post" /></div>
                <h1 className="post-main-title">How to create your own podcast cover art?</h1>
                <p className="post-main-info"> Jan 8, 2021  |  By VitaThemes</p>
            </main>
            <div className="post-content">
                <p className="post-content-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis augue.
                    Cras suscipit sit amet est in aliquam. In vel blandit nunc. Donec at dolor in orci tristique
                    bibendum.ligula, sit amet imperdiet purus. Vestibulum quis leo nibh.
                </p>
                <h2 className="post-content-title" style={{ marginTop: "39px" }}>Makemeup Podcast Theme</h2>
                <p className="post-content-desc" style={{ marginTop: "24px" }}>
                    Vivamus et aliquet neque. Mauris feugiat blandit augue a vestibulum.
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                    per inceptos himenaeos. Aliquam a luctus magna, a finibus massa. <br />
                    Proin ultricies, arcu ac dignissim sollicitudin, nibh nibh fermentum eros,
                    id consequat nisi odio vestibulum tortor. Cras non interdum ligula, sit amet imperdiet purus.
                    Vestibulum quis leo nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                    per inceptos himenaeos. Aliquam a luctus magna, a finibus massa.
                </p>
                <div className="post-tags d-f">
                    <div>#Apple</div>
                    <div>#Keynote</div>
                    <div>#Product</div>
                </div>
                <div className="post-share d-f align-center">
                    <div className="post-share-title">Share:</div>
                    <a href="" className="d-b">
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.91667 2.5H5.41667C4.95643 2.5 4.58333 2.8731 4.58333 3.33333V5.83333H7.91667C8.01145 5.83123 8.10134 5.87533 8.15769 5.95156C8.21404 6.0278 8.22982 6.12667 8.2 6.21667L7.58333 8.05C7.52651 8.21827 7.36926 8.33201 7.19167 8.33333H4.58333V14.5833C4.58333 14.8135 4.39679 15 4.16667 15H2.08333C1.85321 15 1.66667 14.8135 1.66667 14.5833V8.33333H0.416667C0.186548 8.33333 0 8.14678 0 7.91667V6.25C0 6.01988 0.186548 5.83333 0.416667 5.83333H1.66667V3.33333C1.66667 1.49238 3.15905 0 5 0H7.91667C8.14678 0 8.33333 0.186548 8.33333 0.416667V2.08333C8.33333 2.31345 8.14678 2.5 7.91667 2.5Z" fill="#222222" />
                        </svg>
                    </a>
                    <a href="" className="d-b">
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3769 7.69418C15.3743 11.0018 13.2565 13.9371 10.1184 14.9823C10.0009 15.0185 9.87332 14.9986 9.7724 14.9285C9.6715 14.8551 9.61156 14.738 9.61096 14.6132V12.5606C9.62759 12.0077 9.49479 11.4606 9.22657 10.9769C9.18599 10.9136 9.18599 10.8326 9.22657 10.7693C9.25775 10.711 9.31485 10.671 9.38032 10.6617C11.2562 10.4695 12.3017 9.72377 12.3017 7.69418C12.3469 6.74653 12.0184 5.819 11.3869 5.11105C11.479 4.812 11.5281 4.50139 11.5329 4.18851C11.5296 3.90799 11.4909 3.62902 11.4176 3.35822C11.3693 3.17765 11.1958 3.05984 11.0101 3.08146C10.3058 3.18144 9.65005 3.49854 9.13431 3.98863C8.17959 3.80416 7.19839 3.80416 6.24368 3.98863C5.72794 3.49854 5.07223 3.18144 4.36784 3.08146C4.18216 3.05984 4.00872 3.17765 3.96038 3.35822C3.88711 3.62902 3.84836 3.90799 3.84506 4.18851C3.84984 4.50139 3.89903 4.812 3.99113 5.11105C3.35956 5.819 3.03106 6.74653 3.07628 7.69418C3.07628 9.8314 4.23714 10.5464 6.36668 10.7232C6.10233 11.0696 5.92087 11.472 5.83622 11.8994C5.83622 11.8994 5.83622 11.9532 5.83622 11.9917C5.83252 12.0275 5.83252 12.0635 5.83622 12.0993C5.80423 12.341 5.58692 12.5142 5.3442 12.4914C5.22846 12.486 5.11545 12.4544 5.01362 12.3991C4.59479 12.1441 4.22506 11.816 3.92194 11.4305C3.72881 11.2115 3.52348 11.0036 3.30691 10.8078C3.16931 10.6886 3.01684 10.5879 2.85333 10.5079C2.73874 10.4436 2.59889 10.4436 2.48431 10.5079C2.37431 10.5785 2.30771 10.7001 2.30749 10.8308V10.8769C2.30771 11.0076 2.37431 11.1293 2.48431 11.1998C2.76028 11.4308 2.99886 11.7031 3.19159 12.0071C3.51708 12.5171 3.93104 12.9649 4.41396 13.3294C4.73215 13.5427 5.10721 13.6552 5.49026 13.6523H5.76703V14.6132C5.76643 14.738 5.70649 14.8551 5.60558 14.9285C5.50467 14.9986 5.37709 15.0185 5.25963 14.9823C1.53259 13.7409 -0.659069 9.88943 0.17747 6.05121C1.01401 2.21298 4.60962 -0.37717 8.5152 0.0450015C12.4208 0.467173 15.3798 3.76584 15.3769 7.69418Z" fill="#222222" />
                        </svg>
                    </a>
                    <a href="" className="d-b">
                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.6213 2.17393C17.1659 2.78129 16.6155 3.3111 15.9913 3.7429C15.9913 3.90156 15.9913 4.06022 15.9913 4.22769C15.9964 7.10894 14.8455 9.87169 12.7967 11.8966C10.7479 13.9215 7.97265 15.0391 5.09304 14.999C3.42828 15.0045 1.78483 14.6244 0.291442 13.8883C0.210919 13.8532 0.158982 13.7735 0.159288 13.6856V13.5886C0.159288 13.4621 0.261845 13.3595 0.388355 13.3595C2.02478 13.3055 3.60282 12.7382 4.89922 11.7376C3.41803 11.7078 2.08533 10.8303 1.47202 9.48111C1.44104 9.40741 1.45069 9.32289 1.49747 9.25808C1.54426 9.19327 1.62142 9.15753 1.70109 9.16379C2.15125 9.20904 2.60592 9.16714 3.04025 9.04039C1.40514 8.70096 0.176536 7.34352 0.000703367 5.68208C-0.00554596 5.60238 0.0301714 5.52518 0.0949523 5.47837C0.159733 5.43156 0.244213 5.42191 0.317873 5.4529C0.756666 5.64652 1.23034 5.7485 1.7099 5.75259C0.277153 4.81221 -0.341698 3.02358 0.20334 1.39825C0.2596 1.24032 0.394766 1.12365 0.559167 1.09111C0.723568 1.05858 0.892952 1.11498 1.00507 1.23959C2.93847 3.29731 5.59499 4.52349 8.41451 4.6596C8.34229 4.37142 8.30677 4.07525 8.30879 3.77816C8.33516 2.22032 9.29906 0.832559 10.7492 0.264583C12.1994 -0.303393 13.8488 0.0608181 14.9253 1.18671C15.6591 1.04692 16.3685 0.800439 17.031 0.455108C17.0795 0.424812 17.141 0.424812 17.1895 0.455108C17.2198 0.503656 17.2198 0.56522 17.1895 0.613768C16.8687 1.34854 16.3266 1.96482 15.6389 2.37666C16.2411 2.30683 16.8327 2.16477 17.401 1.95357C17.4488 1.921 17.5117 1.921 17.5596 1.95357C17.5997 1.9719 17.6296 2.00697 17.6415 2.04943C17.6534 2.09189 17.646 2.13743 17.6213 2.17393Z" fill="#222222" />
                        </svg>
                    </a>
                </div>
                <div className="post-related">
                    <h2 className="post-related-title">Related Posts</h2>
                    <div className="post-related-box d-f">
                        <div className="post-related-item d-f">
                            <div><img src="/images/home-post1.png" alt="post1" /></div>
                            <div>
                                <h3 className="related-item-title">How to create your own podcast cover art?</h3>
                                <p className="related-item-date">Dec 4, 2019</p>
                                <Link to="/post/0" className="blog-item-more">Read More</Link>
                            </div>
                        </div>
                        <div className="post-related-item d-f">
                            <div><img src="/images/home-post2.png" alt="post2" /></div>
                            <div>
                                <h3 className="related-item-title">How to create your own podcast cover art?</h3>
                                <p className="related-item-date">Dec 4, 2019</p>
                                <Link to="/post/1" className="blog-item-more">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-reply">
                    <h2 className="post-reply-title">Leave a Reply</h2>
                    <h4 className="post-reply-subtitle">Required fields are marked *</h4>
                    <form action="" className='post-reply-fm'>
                        <div className="input-bl">
                            <label htmlFor="replyComment">Comment</label>
                            <textarea name="replyComment" id="replyComment"></textarea>
                        </div>
                        <div className="input-bl">
                            <label htmlFor="replyName">Name*</label>
                            <input type="text" name='replyName' id='replyName' />
                        </div>
                        <div className="input-bl">
                            <label htmlFor="replyEmail">Email*</label>
                            <input type="email" name="replyEmail" id="replyEmail" />
                        </div>
                        <div className="input-bl input-bl-last">
                            <label htmlFor="replyWebsite">Website*</label>
                            <input type="url" name="replyWebsite" id="replyWebsite" />
                        </div>
                        <div className="check-bl d-f align-center">
                            <input type="checkbox" name="replySave" id="replySave" />
                            <label htmlFor="replySave">
                                Save my name, email, and website in this browser for the next time I comment
                            </label>
                        </div>
                        <button type="button">Submit</button>
                    </form>
                </div>
                <div className="post-comments">
                    <h2 className="post-comments-title">Comments</h2>
                    <div className="post-comments-box d-f">
                        <div className="comment-bl">
                            <div className="post-comments-item d-f">
                                <div className="comments-item-photo">
                                    <img src="/images/comment-author1.png" alt="comment-author1" />
                                </div>
                                <div>
                                    <div className="comments-item-info d-f">
                                        <div className="comments-item-name">Mark Newman</div>
                                        <div className="comments-item-date">October 24.2020</div>
                                    </div>
                                    <p className="comments-item-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed at arcu dui. Aenean placerat.
                                    </p>
                                    <div className="reply-action d-f">
                                        <button className='btn-clear d-b'>
                                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 4C13.2 4 16 7.8 16 14C14.5 11.6 13.3 10 8 10V14L0 7L8 0V4Z" fill="#979797" />
                                            </svg>
                                        </button>
                                        <div className="reply-action-name">Reply</div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-reply-bl">
                                <div className="post-comments-item d-f">
                                    <div className="comments-item-photo">
                                        <img src="/images/comment-author2.png" alt="comment-author2" />
                                    </div>
                                    <div>
                                        <div className="comments-item-info d-f">
                                            <div className="comments-item-name">Scarlet Withch</div>
                                            <div className="comments-item-date">October 24.2020</div>
                                        </div>
                                        <p className="comments-item-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Sed at arcu dui. Aenean placerat.
                                        </p>
                                        <div className="reply-action d-f">
                                            <button className='btn-clear d-b'>
                                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 4C13.2 4 16 7.8 16 14C14.5 11.6 13.3 10 8 10V14L0 7L8 0V4Z" fill="#979797" />
                                                </svg>
                                            </button>
                                            <div className="reply-action-name">Reply</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment-bl">
                            <div className="post-comments-item d-f">
                                <div className="comments-item-photo">
                                    <img src="/images/comment-author1.png" alt="comment-author1" />
                                </div>
                                <div>
                                    <div className="comments-item-info d-f">
                                        <div className="comments-item-name">Mark Newman</div>
                                        <div className="comments-item-date">October 24.2020</div>
                                    </div>
                                    <p className="comments-item-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed at arcu dui. Aenean placerat.
                                    </p>
                                    <div className="reply-action d-f">
                                        <button className='btn-clear d-b'>
                                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 4C13.2 4 16 7.8 16 14C14.5 11.6 13.3 10 8 10V14L0 7L8 0V4Z" fill="#979797" />
                                            </svg>
                                        </button>
                                        <div className="reply-action-name">Reply</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post