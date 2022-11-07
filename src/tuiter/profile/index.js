import "./index.css";
import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Profile = () => {
    const profileItem = useSelector(state => state.profile);
    return (
        <>
            <div className={"row"}>
                <div className={"col-1"}>
                    <Link to={"/tuiter/home"}>
                        <i className="text-dark fa-sharp fa-solid fa-arrow-left"></i>
                    </Link>
                </div>
                <div className={"col-11"}>
                    <span className={"fw-bold"}>{profileItem.name}</span>
                    <p className={"text-secondary"}>{profileItem.tuits}</p>
                </div>

            </div>
            <div className={"row wd-height"}>
                <div className={"col-12"}>
                    <img alt={""} className={"wd-background"} src={profileItem.bannerPicture}/>
                    <img className={" wd-profile rounded-circle"} alt={""}
                         src={profileItem.profilePicture}/>
                    <Link to={"/tuiter/profile/editprofile"}>
                        <button
                            className={"float-end btn btn-outline-dark rounded-pill fw-bold mt-2"}>Edit
                            Profile
                        </button>
                    </Link>
                </div>
            </div>
            <div className={"row ms-2"}>
                <span className={"fw-bold"}>{profileItem.name}</span>
                <p className={"text-secondary"}>{profileItem.handle}</p>
                <p>{profileItem.bio}</p>
                <div className="row mt-2 text-secondary">
                    <div className="col-3">
                        <i className="bi bi-geo-alt"></i> <span
                        className="">{profileItem.location}</span>
                    </div>
                    <div className="col-3">
                        <i className="bi bi-balloon"></i> <span
                        className="">{profileItem.dateOfBirth}</span>
                    </div>
                    <div className="col-4">
                        <i className="bi bi-calendar3"></i> <span
                        className="">{profileItem.dateJoined}</span>
                    </div>

                </div>
                <div className={"mt-3 row"}>
                    <div className={"col-3"}>
                        <span className={"fw-bold"}>{profileItem.followingCount}</span> <span
                        className={"text-secondary"}>Following</span>
                    </div>
                    <div className={"col-5"}>
                        <span className={"col-2 fw-bold"}>{profileItem.followersCount}</span> <span
                        className={"text-secondary"}>Followers</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile