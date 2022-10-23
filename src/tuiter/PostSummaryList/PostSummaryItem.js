import React from "react";
const PostSummaryItem = (


    {
        post={
    "topic": "Web Development",
        "userName": "ReactJS",
        "time": "-2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Application or SPAs",
        "image": "../images/react.png",
        "tweets":""
        }
    }

)=>{
    let topic;
    let username;
    let title;
    let tweets;

    if(post.topic!==undefined){
        topic= `<p className='text-secondary'>{post.topic}</p>`;
    }
    else{
        topic="";
    }

    if(post.username!==undefined){
        username= `<p className='text-secondary'>{post.username}</p>`;
    }
    else{
        username="";
    }
    if(post.title!==undefined){
        title= `<p className='text-secondary'>{post.title}</p>`;
    }
    else{
        title="";
    }
    if(post.tweets!==undefined){
        tweets= `<p className='text-secondary'>{post.username}</p>`;
    }
    else{
        tweets="";
    }


    return(
    
     
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-10">
                                <div className="text-secondary"> {post.topic} </div>
                                <div className="fw-bolder"> {post.userName} <i
                                        className="fa-solid fa-circle-check"></i> <span
                                        className="text-secondary fw-normal"> {post.time} </span></div>
                                <div className="fw-bolder pe-1"> {post.title} </div>
                                  <div className="text-secondary"> {post.tweets} </div>
                            </div>
                            <div className="col-2">
                                <img className=" w-100 rounded-1 float-end" src={`${post.image}`}/>
                            </div>

                        </div>
                    </li>

    );
}
export default PostSummaryItem;


