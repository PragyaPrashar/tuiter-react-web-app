import post from "./post.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`              
               
                ${post.map(post => {
            return (PostItem(post));
        }).join('')
    }
               
    `)
}
export default PostList;









