import React from "react";
import WhoToFollowList from "../WhoToFollowList";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";
function Home() {

    return (

        <>
            <div
                className=" rounded-1 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-lg-7 mt-2">
                <WhatsHappening/>
                <TuitsList/>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block mt-2">
                <WhoToFollowList/>
            </div>
        </>

    );
}

export default Home;