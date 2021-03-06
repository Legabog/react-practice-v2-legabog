import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = props => {
  let PostsElements = props.PostsData.map(ell => (
    <Post key={ell.id} message={ell.message} likes={ell.likes} />
  ));

  let newPostElement = React.createRef()

  let addPost = () => {
    props.addPost();
    props.updateNewPostText('');
    
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{PostsElements}</div>
    </div>
  );
};

export default MyPosts;
