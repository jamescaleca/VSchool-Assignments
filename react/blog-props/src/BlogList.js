import React from "react"
import BlogPost from "./BlogPost"
import blogPostData from "./blogPostData"

function BlogList() {
    const blogPostComponents = blogPostData.map(post => <BlogPost key={post.id} post={post} />)

    return(
        <div style={{marginLeft: "100px", marginRight: "100px", paddingLeft: "300px", paddingRight: "300px"}}>
            {blogPostComponents}
        </div>
    )
}

export default BlogList