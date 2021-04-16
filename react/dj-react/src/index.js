import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import styles from "./style.css"

const exportCSS = function() {
    <div className={styles.myStyle}></div>
}


ReactDOM.render(<App />, document.getElementById("root"))
export default exportCSS
