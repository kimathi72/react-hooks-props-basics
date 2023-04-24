import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost() {
  const articleText = "Dear Reader: Bjarne Stroustrup has the perfect lecture oration.";
  const commentText = ["I agree with this statement. - Angela Merkel","A universal truth. - Noam Chomsky","Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451"];
  return (
    <div id="blog-post">
      <BlogContent articleText= {articleText} />
      <Comment commentText= {commentText[0]}/>
      <Comment commentText= {commentText[1]}/>
      <Comment commentText= {commentText[2]}/>
    </div>
  );
}

export default BlogPost;
