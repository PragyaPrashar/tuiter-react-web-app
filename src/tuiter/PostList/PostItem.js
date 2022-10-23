import React from "react"
import "./index.css"
const PostItem = (
    {


        post = {
            avatarIcon: "../bookmarks/space_icon.jpg",
            userName: "Elon Musk",
            handle: "@elonmusk",
            time: "23h",
            taglineWithOutLink: "Amazing show about",
            taglineWithLink: "@inspiration4x",
            taglineWithNoLink: "mission!",
            image: "./bookmarks/body1_thumbnail.jpg",
            caption: "Countdown inspiration4 Mission to Space| Netflix Official Site",
            text: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            redirect: "netflix.com",
            comment: "4.2K",
            retweet: "3.5K",
            heart: "37.5K"
        }
    }



) => {

    // let noLinkText;
    // if (post.taglineWithNoLink !== undefined) {
    //     noLinkText = `<p className='text-secondary'>${post.taglineWithNoLink}</p>`;
    // } else {
    //     noLinkText = "";
    // }
    return (

        <div className="row mt-2 ps-sm-2 pe-sm-3 ps-xxl-0 pe-xxl-0 border-bottom border-secondary">

            <div className="col-xxl-1 col-sm-2 me-xxl-4">
                <img alt="" src={`${post.avatarIcon}`} className=" wd-avatar-icon rounded-circle"/>
            </div>
            <div className="col-10 mb-2">
                <div className="row">
                    <div className="ps-0">
                        <span className="ps-0 text-dark">{post.userName} <i
                            className="fa-solid fa-circle-check "></i> </span><span>{post.handle} &#x2022; {post.time}</span>
                    </div>
                </div>
                <div className="row"><span className="ps-0 text-dark"> {post.taglineWithOutLink} <a
                    href="/test"> {post.taglineWithLink}</a> {post.taglineWithNoLink}</span></div>
                <div className="row wd-bookmark-card border-secondary mt-1 ">
                    <img alt="" src={`${post.image}`} className="mt-0 wd-body-image ps-0 pe-0"/>
                    <div className="wd-bookmarks-title-text">
                        <h4 className="wd-bookmark-title">{post.caption}</h4>
                        <p className="wd-bookmarks-text text-reset">{post.text}</p>
                        <a href="/test" className="text-reset"> <i
                            className="fa-solid fa-link"></i> {post.redirect}</a>
                    </div>

                </div>

                <div className="row mt-2">
                    <div className="col-3">
                        <i className="fa-regular fa-comment"></i> <span
                        className="">{post.comment}</span>
                    </div>
                    <div className="col-3">
                        <i className="fa-solid fa-retweet"></i> <span
                        className="">{post.retweet}</span>
                    </div>
                    <div className="col-3">
                        <i className="fa-regular fa-heart"></i> <span
                        className="">{post.heart}</span>
                    </div>
                    <div className="col-3">
                        <i className="fa-solid fa-upload"></i>
                    </div>
                </div>


            </div>
        </div>
    );
}
export default PostItem;

