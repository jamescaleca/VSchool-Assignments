import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./style.css"

const exportCSS = function(){ <div className={StyleSheet.myStyle}></div> }

ReactDOM.render(<App />, document.getElementById("root"))
export default exportCSS