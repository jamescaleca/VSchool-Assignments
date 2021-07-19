import React, { useContext } from "react"
import Navbar from "./Navbar"
import { ThemeContext } from "./contexts/themeContext"
import "./styles.css"

function About() {
    const {theme} = useContext(ThemeContext)

    return (
        <>
            <Navbar />
            <div style={{margin: 0, padding: 20 }} className={`${theme}--bg-primary`}>
                <h1 className={`${theme}-about text-center`}>About</h1>
                <p className={`${theme}-about text-center`}>Nisi non aute nisi dolor. Occaecat veniam tempor quis deserunt irure tempor ut do in aliquip sint id. Commodo elit fugiat sunt excepteur et. Occaecat amet consectetur pariatur sit sint culpa do occaecat cupidatat. Proident deserunt eu excepteur esse do nulla Lorem nostrud nostrud labore duis. Occaecat consequat eu in consequat irure reprehenderit labore velit. Ea aliqua ullamco elit tempor duis fugiat.
                </p>
            </div>
        </>
    )
}

export default About