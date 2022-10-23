import React from "react";
import post from "./post.json";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (
            post.map(item => <PostItem post={item}/>)

    );
}
export default PostList;









