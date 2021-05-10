// import React from "react"

// function TargetComponent(props) {
    
//     const completedStyle = {
//         fontStyle: "italic",
//         color: "red",
//         textDecoration: "line-through"
//     }

//     return (
//         <div>
//             <li>
//                 <figure>
//                     <img 
//                         alt={props.name} 
//                         src={props.image} 
//                         style={{
//                             height:"250px", 
//                             width: "100%"
//                         }}
//                     />
                    
//                     <figcaption style={{
//                         fontSize: "18px", 
//                         padding: "20px 10px", 
//                         textAlign: "center",
//                         backgroundColor: "cornflowerblue"
//                     }}>
//                         <p style={props.completed ? {completedStyle}: null}>{props.name}</p>
//                         <input 
//                             name="checkbox"
//                             type="checkbox"                             
//                             onChange={() => props.handleSubmit}
//                             completed={`${props.completed}`}
//                         />
//                         <br/>
//                     </figcaption>
//                 </figure>
//             </li>
//         </div>
//     )
// }

// export default TargetComponent

import React from "react"
function TargetComponent(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "red",
        textDecoration: "line-through"
    }
    // const handleInputClick = (event) => {
    //     if(event.target.checked) {
    //         console.log("Completed")
    //     }
    // }
    console.log(props)
    return (
        <div>
            <li>
                <figure>
                    <img 
                        alt={props.name} 
                        src={props.image} 
                        style={{
                            height:"250px", 
                            width: "100%"
                        }}
                    />
                    <figcaption style={{
                        fontSize: "18px", 
                        padding: "20px 10px", 
                        textAlign: "center",
                        backgroundColor: "cornflowerblue"
                    }}>
                        <p style={props.completed ? {completedStyle}: null}>{props.name}</p>
                        <input 
                            name="checkbox"
                            type="checkbox"                             
                            onClick={() => props.handleInputClick(props.id)}
                            completed={`${props.completed}`}
                        />
                        <br/>
                    </figcaption>
                </figure>
            </li>
                {props.completed?<p style={{color: "green", textAlign:"center"}}>completed</p>:<p style={{color: "red", textAlign:"center"}}>not completed</p>}
        </div>
    )
}
export default TargetComponent