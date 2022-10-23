import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
            <>

            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action"><i
                        className="fa-brands fa-twitter"></i> <span className="d-none d-xl-inline-block"> Tuiter</span></a>

               <Link to="/tuiter/home" className={ `list-group-item list-group-item-action ${active === 'home'?'active':''}`} >
                   <i className="fa-sharp fa-solid fa-house-chimney"></i> <span className="d-none d-xl-inline-block">Home</span></Link>

                <Link to="/tuiter/explore" className={ `list-group-item list-group-item-action ${active === 'explore'?'active':''}`} >
                    <i className="fa-solid fa-hashtag"></i> <span className="d-none d-xl-inline-block">Explore</span></Link>

                <a href="#"
                   className="list-group-item list-group-item-action">
                    <i className="fa-solid fa-bell"></i> <span className="d-none d-xl-inline-block">Notifications</span></a>

                <a href="#"
                   className="list-group-item list-group-item-action">
                    <i className="fa-solid fa-envelope"></i>  <span className="d-none d-xl-inline-block">Messages</span></a>

                <a href="#"
                   className="list-group-item list-group-item-action">
                    <i className="fa-solid fa-bookmark"></i> <span className="d-none d-xl-inline-block">Bookmarks</span></a>

                <a href="#"
                   className="list-group-item list-group-item-action">
                    <i className="fa-solid fa-list"></i> <span className="d-none d-xl-inline-block">Lists</span></a>

                <a href="#"
                   className="list-group-item list-group-item-action">
                    <i className="fa-solid fa-user"></i> <span className="d-none d-xl-inline-block">Profile</span></a>

                <a href="#"
                   className="list-group-item list-group-item-action">
                    <i className="fa-sharp fa-solid fa-circle-chevron-down"></i> <span className="d-none d-xl-inline-block">More</span></a>
            </div>

            <button className="btn btn-primary w-100 m-1 rounded-pill">Tuit</button>
            </>
);
}
export default NavigationSidebar;
