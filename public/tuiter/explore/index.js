import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";


function exploreComponent() {

    let value=window.location.pathname.split('/');
    let screen=value[value.length-2];

    $('#wd-explore').append(`
        <div class="row">

        <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 ">
          ${NavigationSidebar(screen)}
        </div>
        
         <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-lg-7">
    ${ExploreComponent()}
        </div>
        
         <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
        ${WhoToFollowList()}
        </div>
    </div>

   `);
}

$(exploreComponent);

