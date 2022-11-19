import React from "react"
import "./index.css"
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
import TuitStats from "./TuitStats";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {


        tuitItem = {
            avatarIcon: "../bookmarks/space_icon.jpg",
            username: "Elon Musk",
            handle: "@elonmusk",
            time: "23h",
            tagline: "Amazing show about",
            image: "./bookmarks/body1_thumbnail.jpg",
            caption: "Countdown inspiration4 Mission to Space| Netflix Official Site",
            text: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            redirect: "netflix.com",
            comment: "4.2K",
            retweet: "3.5K",
            heart: "37.5K"
        }
    }



) => {
const dispatch=useDispatch();
const deleteTuitHandler=(_id)=>{
    console.log("Inside delete handler with id ",_id);
    dispatch(deleteTuitThunk(_id));

}

    return (

        <div className="row mt-2 ps-sm-2 pe-sm-3 ps-xxl-0 pe-xxl-0 border-bottom border-gray">

            <div className="col-xxl-1 col-sm-2 me-xxl-4">
                <img alt="" src={`${tuitItem.avatarIcon}`} className=" wd-avatar-icon rounded-circle"/>

            </div>
            <div className="col-10 mb-2">
                <div className="row">
                    <div className="ps-0">
                        <span className="ps-0 text-dark">{tuitItem.username} <i
                            className="fa-solid fa-circle-check "></i> </span><span>{tuitItem.handle} &#x2022; {tuitItem.time} <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuitItem._id)}></i></span>
                    </div>

                </div>



                <div className="row">
                    <span className="ps-0 text-dark"> {tuitItem.tagline}</span>
                </div>

            <TuitStats tuitItem={tuitItem}/>


            </div>
        </div>
    );
}
export default TuitItem;

