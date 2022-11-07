import React, {useState} from "react";
import "./index.css"
import {useDispatch} from "react-redux";
import {addTuit} from "../tuits/tuits-reducer";

const WhatsHappening = () => {

    let [whatsHappening, setWhatsHappening] = useState('');

    const textAreaHandler = (event) => {
        let text = event.target.value;
        setWhatsHappening(text);
    }
    const disPatch = useDispatch();
    const tuitClickHandler = () => {
        disPatch(addTuit(whatsHappening));
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
