import React from "react";
import post from "./post.json";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (
        <ul className="list-group">
            {
                post.map(item => <PostSummaryItem post={item}/>)

            }
        </ul>
    )
}
export default PostSummaryList;















