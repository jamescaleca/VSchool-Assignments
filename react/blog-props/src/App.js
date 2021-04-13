import React from "react"
import Header from "./Header"
import BlogList from "./BlogList"
import Footer from "./Footer"

function App() {
    const header = <Header />
    const blogList = <BlogList />
    const footer = <Footer />

    return(
        <div>
            {header}
            {blogList}
            {footer}
        </div>
    )
}

export default App