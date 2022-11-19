import React from "react";
import Explore from "./explore/index.js";
import Home from "./Home";
import {Routes, Route} from "react-router";
import NavigationSidebar from "./NavigationSidebar";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import ProfileComponent from "./profile/ProfileComponent";

const store=configureStore({
    reducer: {
        who: whoReducer, tuitsData: tuitsReducer
    } });

function Tuiter() {
    return (
        <Provider store={store}>
        <div>

            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 mt-2">
                    <NavigationSidebar/>
                </div>

                <Routes>
                    <Route path="home" element={<Home/>}/>
                    <Route path="explore" element={<Explore/>}/>
                    <Route path="profile/*" element={<ProfileComponent/>}/>

                </Routes>

            </div>
        </div>
</Provider>
    );
}

export default Tuiter

