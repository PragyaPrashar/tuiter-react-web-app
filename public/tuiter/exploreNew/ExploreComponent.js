import postSummaryList from "../PostSummaryList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class="row">
                <div class=" col-10 position-relative">
                    <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                    <i class="fa-solid fa-magnifying-glass wd-search"></i>
                </div>
                <div class="col-2 mt-1">
                    <img class="w-50 float-end" src="../../images/settings.png">
                </div>
            </div>
             <div class="mt-2">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="entertainment.html"> <span class="d-none d-md-inline-block">Entertainment</span></a>
                    </li>
                </ul>
                <div class="position-relative mt-2">
                    <img src="../../images/starship1.jpg" width="100%">
                    <h1 class="position-absolute bottom-0 wd-overlay-text text-white">SpaceX's
                        Starship</h1>
                </div>
                 ${PostSummaryList()}
                 </div>
      
    `);
}
export default ExploreComponent;
