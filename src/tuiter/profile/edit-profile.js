import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {editProfile} from "./profile-reducer";

const EditProfile = () => {
    let profileItem = useSelector(state => state.profile);
    const [updatedName, setName]=useState(profileItem.name);
    const [updatedLocation, setLocation]=useState(profileItem.location);
    const [updatedBio, setBio]=useState(profileItem.bio);
    const [updateddateOfBirth, setDateOfBirth]=useState(profileItem.dateOfBirth);

    const changeName=(event)=>{
        setName(event.target.value);
    }
    const changeLocation=(event)=>{
        setLocation(event.target.value);
    }
    const changeBio=(event)=>{
        setBio(event.target.value);
    }
    const changedateOfBirth=(event)=>{
        setDateOfBirth(event.target.value);
    }

    const dispatch=useDispatch();
    const changeHandler=()=>{
        profileItem = {
            ...profileItem,
            name:updatedName,
                location:updatedLocation,
            bio:updatedBio,
            dateOfBirth:updateddateOfBirth,
        }
        dispatch(editProfile(profileItem));
    }




    return (
        <>
            <div className={"row"}>
                <div className={"col-1"}>
                    <Link to={"/tuiter/profile"}>
                        <i className="bi text-dark bi-x-lg"></i>
                    </Link>
                </div>
                <div className={"col-11"}>
                    <span className={"fw-bold"}>Edit Profile</span>
                   <Link to={"/tuiter/profile"}> <button onClick={changeHandler} className={"btn btn-dark rounded-pill fw-bold float-end"}>Save</button></Link>
                </div>
            </div>

            <div className={"row mt-2 wd-height-edit-profile"}>
                <div className={"col-12"}>
                    <img alt={""} className={"wd-background"} src={"../../images/background.jpg"}/>
                    <img className={" wd-profile rounded-circle"} alt={""} src={"../../images/jack.jpg"}/>
                </div>
            </div>

            <div className={"row"}>
                <div className={"border rounded border-gray border-1"}>
                    <label for={"name"} className={"text-secondary"}>Name</label>
                    <input id={"name"} className={"wd-width"} type={"text"} value={updatedName} onChange={changeName}></input>
                </div>

                <div className={"border rounded border-gray border-1 mt-5"}>
                    <label for={"bio"} className={"text-secondary"}>Bio</label>
                    <input id={"bio"} className={"wd-width"} type={"text"} value={updatedBio} onChange={changeBio}></input>
                </div>

                <div className={"border rounded border-gray border-1 mt-5"}>
                    <label for="location" className={"text-secondary"}>Location</label>
                    <input id="location" className={"wd-width"} type={"text"} value={updatedLocation} onChange={changeLocation}></input>
                </div>

                <div className={"mt-5"}>
                    <label for="" className={"text-secondary"}>Birth date</label> <span className={"text-secondary"}>&#x2022;</span><span className={"text-primary"}> Edit</span>
                    <input className={"wd-width"} type={"text"} value={updateddateOfBirth} onChange={changedateOfBirth}></input>

                </div>
                <div className={"mt-5"}>
                    <span>Switch to professional</span><i className="bi bi-chevron-right float-end text-secondary"></i>
                </div>
            </div>
        </>
    )
}
export default EditProfile;
