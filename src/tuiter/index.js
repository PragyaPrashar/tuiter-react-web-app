import React from "react";
import Explore from "./explore/index.js";
import HomeScreen from "./HomeScreen/index";
import {Routes, Route} from "react-router";
import NavigationSidebar from "./NavigationSidebar";

function Tuiter() {
    return (
        <div>
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 mt-2">
                    <NavigationSidebar/>
                </div>

                <Routes>
                    <Route path="home" element={<HomeScreen/>}/>
                    <Route path="explore" element={<Explore/>}/>
                </Routes>

            </div>
        </div>

    );
}

export default Tuiter

