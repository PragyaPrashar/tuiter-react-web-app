import React from "react";
import WhoToFollowList from "../WhoToFollowList";
import Profile from "./index";
import {Route, Routes} from "react-router";
import EditProfile from "./edit-profile";
import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import {Provider} from "react-redux";
const store = configureStore({
                                 reducer: {
                                     profile: profileReducer,
                                 }
                             })
function ProfileComponent() {

    return (

        <>
            <Provider store={store}>
            <div
                className=" rounded-1 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-lg-7 mt-2">
                <Routes>
                    <Route index element={<Profile/>}/>
                    <Route path="/editprofile" element={<EditProfile/>}/>
                </Routes>
            </div>
            </Provider>

            <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block mt-2">
                <WhoToFollowList/>
            </div>
        </>

    );
}

export default ProfileComponent;