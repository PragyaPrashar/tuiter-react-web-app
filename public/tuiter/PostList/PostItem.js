const PostItem = (post) => {
    let noLinkText;
    if(post.taglineWithNoLink!==undefined){
        noLinkText= `<p class='text-secondary'>${post.taglineWithNoLink}</p>`;
    }
    else{
        noLinkText="";
    }
return(`

<div class="row mt-2 border-bottom border-secondary">
     <div class="col-xxl-2">
         <img src='${post.avatarIcon}' class=" wd-avatar-icon rounded-circle">
     </div>
     <div class="col-xxl-9 pe-1 mb-2">
         <div class="row">
             <div class="ps-0">
             <span class="ps-0 text-white">${post.userName} <i class="fa-solid fa-circle-check "></i> </span><span>${post.handle} &#x2022; ${post.time}</span></div>
         </div>
         <div class="row"><span class="ps-0 text-white"> ${post.taglineWithOutLink} <a href="#"> ${post.taglineWithLink}</a> ${post.taglineWithNoLink}</span></div>
         <div class="row wd-bookmark-card border-secondary">
             <img src='${post.image}' class="mt-0 wd-body-image" >
             <div class="wd-bookmarks-title-text">
                 <h4 class="wd-bookmark-title">${post.caption}</h4>
                 <p class="wd-bookmarks-text text-reset">${post.text}</p>
                 <a href="#" class="text-reset"> <i class="fa-solid fa-link"></i> ${post.redirect}</a>
             </div>

         </div>

         <div class="row mt-2">
             <div class="col-3">
             <i class="fa-regular fa-comment"></i> <span class="">${post.comment}</span>
             </div>
             <div class="col-3">
                 <i class="fa-solid fa-retweet"></i> <span class="">${post.retweet}</span>
             </div>
             <div class="col-3">
                 <i class="fa-regular fa-heart"></i> <span class="">${post.heart}</span>
             </div>
             <div class="col-3">
                 <i class="fa-solid fa-upload"></i>
             </div>
         </div>


     </div>
 </div>
`);
}
export default PostItem;

