const NavigationSidebar = (page) => {
let home=false;
let explore=false;

    if(page==="HomeScreen" || page==="homescreen"){
        console.log('Home Screen');
        home=true;
        explore=false;

    }
    else if(page==="explore"){
        console.log('Explore Screen');
        explore=true;
        home=false;
    }

    return (`


  <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action"><i
                        class="fa-brands fa-twitter"></i></a>
               <a class="list-group-item list-group-item-action ${home ? 'active' : ''}" href="../HomeScreen/index2.html">
                   <i class="fa-sharp fa-solid fa-house-chimney"></i> <span class="d-none d-xl-inline-block">Home</span></a>
                   
                   
                   
                <a class="list-group-item list-group-item-action ${explore ? 'active' : ''}" href="../explore/index2.html">
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
