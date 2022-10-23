import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";
import "./index.css"
const ExploreComponent = () => {
    return (
        <>
        <div className="row">
                <div className=" col-10 position-relative">
                    <input className="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                    <i className="fa-solid fa-magnifying-glass wd-search"></i>
                </div>
                <div className="col-2 mt-1">
                    <img alt="" className="w-50 float-end" src="../images/settings.png"/>
                </div>
            </div>
             <div className="mt-2">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="for-you.html">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="news.html">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="entertainment.html"> <span className="d-none d-md-inline-block">Entertainment</span></a>
                    </li>
                </ul>
                <div className="position-relative mt-2">
                    <img alt="" src="../images/starship1.jpg" width="100%"/>
                    <h1 className="position-absolute bottom-0 wd-overlay-text text-white">SpaceX's
                        Starship</h1>
                </div>
                 <PostSummaryList/>
                 </div>
            </>
      
    );
}
export default ExploreComponent;
