import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";



const TuitStats=(
    {


        tuitItem = {
            avatarIcon: "../bookmarks/space_icon.jpg",
            username: "Elon Musk",
            handle: "@elonmusk",
            time: "23h",
            tagline: "Amazing show about",
            image: "./bookmarks/body1_thumbnail.jpg",
            caption: "Countdown inspiration4 Mission to Space| Netflix Official Site",
            text: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            redirect: "netflix.com",
            comment: "4.2K",
            retweet: "3.5K",
            heart: "37.5K",
            likes:0
        }
    }





)=>{

    const dispatch=useDispatch();
    let [toggleHeart,setToggle]=useState(false);
    const likeHandler=()=>{
        toggleHeart=!toggleHeart;
        setToggle(toggleHeart);
        dispatch(updateTuitThunk({
                                     ...tuitItem,
                                     likes: tuitItem.likes + 1
                                 }));


    }

    const unlikeHandler=()=>{
        toggleHeart=!toggleHeart;
        setToggle(toggleHeart);
        dispatch(updateTuitThunk({
                                     ...tuitItem,
                                     likes: tuitItem.likes - 1
                                 }));


    }



   return(                <div className="row mt-2">
       <div className="col-3">
           <i className="fa-regular fa-comment"></i> <span
           className="ms-3">123</span>
       </div>
       <div className="col-3">
           <i className="fa-solid fa-retweet"></i> <span
           className="ms-3">432</span>
       </div>
       <div className="col-3">

           {toggleHeart && <i className="bi bi-heart-fill text-danger" onClick={unlikeHandler}></i> }
           {!toggleHeart &&<i className="bi bi-heart" onClick={likeHandler}></i> }

            <span className="ms-3">{tuitItem.likes}</span>
       </div>
       <div className="col-3">
           <i className="fa-solid fa-upload"></i>
       </div>
   </div>);
}
export default TuitStats;