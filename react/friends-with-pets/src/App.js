import React from "react"
import friendsData from "./friendsData"
import Friend from "./Friend"

function FriendList() {
    const friendComponents = friendsData.map(friend => <Friend key={friend.id} friend={friend} pets={friend.pets} />)

    return(
        <div style={{margin: "20px"}}>
            {friendComponents}
        </div>
    )
}

export default FriendList