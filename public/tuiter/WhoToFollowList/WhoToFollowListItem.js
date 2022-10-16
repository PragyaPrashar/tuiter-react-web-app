const WhoToFollowListItem = (who) =>{
    return(`

                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2 ps-lg-0 pe-lg-0 ps-xl-2 pe-xl-2">
                            <img class="wd-image me-5" src='${who.avatarIcon}'>
                        </div>
                        <div class="col-6 ps-lg-0 pe-lg-0 ps-xl-2 pe-xl-2">
                            <div class="fw-bolder">${who.userName} <i class="fa-solid fa-circle-check"></i>
                            </div>
                            <div>${who.handle}</div>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-primary m-1 float-end rounded-pill">Follow</button>
                        </div>
                    </div>
                </li> 
    `);
}
export default WhoToFollowListItem;

