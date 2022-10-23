import React from "react";
const WhoToFollowListItem = (

    {
        who={
            avatarIcon: "../../images/java.png",
            userName: "Java",
            handle: "@Java"
        }
    }
) =>{
    return(

                <li className="list-group-item">
                    <div className="row">
                        <div className="col-2 ps-lg-0 pe-lg-0 ps-xl-2 pe-xl-2">
                            <img className="wd-image me-5" src={`${who.avatarIcon}`}/>
                        </div>
                        <div className="col-6 ps-lg-0 pe-lg-0 ps-xl-2 pe-xl-2">
                            <div className="fw-bolder">{who.userName} <i className="fa-solid fa-circle-check"></i>
                            </div>
                            <div>{who.handle}</div>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-primary m-1 float-end rounded-pill">Follow</button>
                        </div>
                    </div>
                </li> 
    )
};
export default WhoToFollowListItem;

