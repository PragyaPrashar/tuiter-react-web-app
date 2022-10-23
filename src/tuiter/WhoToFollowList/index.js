import React from "react";
import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (

        <ul className="list-group">
            <li className="list-group-item fw-bolder">Who to follow</li>
            {
                who.map(item => <WhoToFollowListItem who={item}/>)

            }
        </ul>

    )
}
export default WhoToFollowList;

