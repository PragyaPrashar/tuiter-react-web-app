import React, {useState} from "react";
import "./index.css"
import {useDispatch} from "react-redux";
import {addTuit} from "../tuits/tuits-reducer";
import {createTuitThunk}
    from "../../services/tuits-thunks";


const WhatsHappening = () => {

    let [whatsHappening, setWhatsHappening] = useState('');

    const textAreaHandler = (event) => {
        let text = event.target.value;
        setWhatsHappening(text);
    }
    const disPatch = useDispatch();
    const tuitClickHandler = () => {
        //disPatch(addTuit(whatsHappening));
        const obj={

                        _id: 123,
                        avatarIcon:"../images/space_icon.jpg",
                        topic: "Web Development",
                        userName: "ReactJS",
                        username: "SpaceX",
                        time: "2h",
                        title: "React.js is a component based front end library that makes it very easy to build Single Page Application or SPAs",
                        image: "../images/react.png",
                        tagline:"",
                        tweets:"",
                        tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
                        liked: true,
                        replies: 123,
                        retuits: 432,
                        likes: 2345,
                        handle: "@spaceX",

                        comment:"4.2K",
                        retweet:"3.5K",
                        heart:"37.5K"


                    }





        const newTuit = {
            ...obj,
            tagline: whatsHappening
        }
        disPatch(createTuitThunk(newTuit));

    }

    return (
        <div className="row">
            <div className="col-1">
                <img alt="" className={"rounded-circle"} src="/images/body1_thumbnail.jpg"
                     width={50} height={50}/>
            </div>
            <div className="col-11">
                <textarea value={whatsHappening} placeholder={"what's happening?"}
                          className="form-control border-0"
                          onChange={textAreaHandler}></textarea>
                <div>
                    <button
                        className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={tuitClickHandler}>Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>

            </div>

            <div>
                <hr/>
            </div>
        </div>

    );

}
export default WhatsHappening;
