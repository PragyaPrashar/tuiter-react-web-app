import React from "react";
import PostSummaryItem from "./PostSummaryItem.js";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    //const postsArray = useSelector(state=>state.tuits)
    const {tuits}  = useSelector(state=>state.tuitsData)
    return (

        <ul className="list-group">
            {
                tuits.map(post => <PostSummaryItem key={post._id} post={post}/>)

            }
        </ul>
    )
}
export default PostSummaryList;















