import React from "react";
import {Link} from "react-router-dom";
import Nav from "../nav";
import Explore from "./explore/index.js";
import HomeScreen from "./HomeScreen/index";
import {Routes, Route} from "react-router";



function Tuiter() {
    return(
        <div>
            {/*<Nav/>*/}
            {/*<h1>Tuiter</h1>*/}

            <Routes>
                <Route path="home"    element={<HomeScreen/>}/>
                <Route path="explore" element={<Explore/>}/>
            </Routes>

        </div>
    );
}
export default Tuiter

