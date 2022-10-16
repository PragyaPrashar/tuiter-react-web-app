const PostSummaryItem = (post)=>{
    let topic;
    let username;
    let title;
    let tweets;

    if(post.topic!==undefined){
        topic= `<p class='text-secondary'>${post.topic}</p>`;
    }
    else{
        topic="";
    }

    if(post.username!==undefined){
        username= `<p class='text-secondary'>${post.username}</p>`;
    }
    else{
        username="";
    }
    if(post.title!==undefined){
        title= `<p class='text-secondary'>${post.title}</p>`;
    }
    else{
        title="";
    }
    if(post.tweets!==undefined){
        tweets= `<p class='text-secondary'>${post.username}</p>`;
    }
    else{
        tweets="";
    }


    return(`
    
     
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-10">
                                <div class="text-secondary"> ${post.topic} </div>
                                <div class="fw-bolder"> ${post.userName} <i
                                        class="fa-solid fa-circle-check"></i> <span
                                        class="text-secondary fw-normal"> ${post.time} </span></div>
                                <div class="fw-bolder pe-1"> ${post.title} </div>
                                  <div class="text-secondary"> ${post.tweets} </div>
                            </div>
                            <div class="col-2">
                                <img class=" w-100 rounded-1 float-end" src=' ${post.image} '>
                            </div>

                        </div>
                    </li>

    `);
}
export default PostSummaryItem;


