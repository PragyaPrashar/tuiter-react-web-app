import React, {useState} from "react";



const TuitStats=()=>{
    let [toggleHeart,setToggle]=useState(false);
    const likeHandler=()=>{
        toggleHeart=!toggleHeart;
        setToggle(toggleHeart);
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

           {toggleHeart && <i className="bi bi-heart-fill text-danger" onClick={likeHandler}></i> }
           {!toggleHeart &&<i className="bi bi-heart" onClick={likeHandler}></i> }

            <span className="ms-3">2345</span>
       </div>
       <div className="col-3">
           <i className="fa-solid fa-upload"></i>
       </div>
   </div>);
}
export default TuitStats;