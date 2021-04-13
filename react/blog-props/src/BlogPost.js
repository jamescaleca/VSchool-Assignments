import React from "react"

function BlogPost(props) {
    return(
        <div className="container" 
            style={{
                width: "100%", 
                paddingLeft: "15px", 
                paddingRight: "15px"
            }}>
            <div className="row" style={{display: "flex", flexWrap: "wrap"}}>
                <div className="post-preview" style={{boxSizing: "border-box"}}>
                    <a href="post.html" style={{textDecoration: "none", color: "black"}}>
                        <h2 className="post-title" 
                            style={{
                                fontWeight: "800", 
                                fontSize: "40px", 
                                marginTop: "30px", 
                                marginBottom: "10px"
                            }}>
                                {props.post.title}
                        </h2>
                        <h3 className="post-subtitle" 
                            style={{
                                lineHeight: "1.2", 
                                fontSize: "32px", 
                                fontWeight: "300", 
                                marginTop: "10px"
                                }}>
                                    {props.post.subTitle}
                        </h3>
                        <p className="author-date" style={{color: "#868e96",fontSize: "20px"}}>
                            <i>Posted by <em style={{color: "black"}}>{props.post.author}</em> on {props.post.date}</i></p>
                        <hr></hr>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BlogPost