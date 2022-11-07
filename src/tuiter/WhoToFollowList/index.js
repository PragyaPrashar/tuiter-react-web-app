import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
        const whoArray= useSelector((state)=>state.who);
    return (
        <>
        <ul className="list-group">
            <li className="list-group-item fw-bolder">Who to follow</li>
            {
                whoArray.map(item => <WhoToFollowListItem who={item}/>)

            }
        </ul>
</>
    );
};
export default WhoToFollowList;

