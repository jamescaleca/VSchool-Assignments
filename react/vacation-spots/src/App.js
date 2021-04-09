import React from "react"
import Spot from "./Spot"
import vacationSpots from "./vacationSpotsData.js"

function App() {
    const vacationComponents = vacationSpots.map(location => <Spot key={location.id} location={location} />)

    return(
        <div>
            {vacationComponents}
        </div>
    )
}

export default App