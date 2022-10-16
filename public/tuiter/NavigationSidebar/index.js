const NavigationSidebar = (page) => {
let Home="false";
let Explore="false"
    if(page==="Home"){
        console.log('Home Screen');
        Home=true;
    }
    else if(page==="Explore"){
        console.log('Explore Screen');
        Explore=true;
    }

    return (`


  <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action"><i
                        class="fa-brands fa-twitter"></i></a>
               <a class="list-group-item list-group-item-action ${Home ? 'active' : ''}" href="../HomeScreen/index.html">
                   <i class="fa-sharp fa-solid fa-house-chimney"></i> <span class="d-none d-xl-inline-block">Home</span></a>
                   
                   
                   
                <a class="list-group-item list-group-item-action ${Explore ? 'active' : ''}" href="../explore/index.html">
                    <i class="fa-solid fa-hashtag"></i> <span class="d-none d-xl-inline-block">Explore</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-bell"></i> <span class="d-none d-xl-inline-block">Notifications</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-envelope"></i>  <span class="d-none d-xl-inline-block">Messages</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-bookmark"></i> <span class="d-none d-xl-inline-block">Bookmarks</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-list"></i> <span class="d-none d-xl-inline-block">Lists</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-user"></i> <span class="d-none d-xl-inline-block">Profile</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa-sharp fa-solid fa-circle-chevron-down"></i> <span class="d-none d-xl-inline-block">More</span></a>
            </div>
            <button class="btn btn-primary w-100 m-1 rounded-pill">Tuit</button>




`);
}
export default NavigationSidebar;
