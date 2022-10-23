import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";


function Explore() {

    
    return (
        <div className="row">

        <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 mt-2">
        <NavigationSidebar/>
        </div>
        
         <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-lg-7 mt-2">
        <ExploreComponent/>
        </div>
        
         <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block mt-2">
             <WhoToFollowList/>
        </div>
    </div>

   );
}
export default Explore;

