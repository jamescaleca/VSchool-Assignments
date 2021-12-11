import React, { useContext } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import { round } from 'mathjs'
import { DataContext } from '../contexts/dataProvider'
import { UserContext } from '../contexts/userProvider.js'

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function DiffStateMap(){
    const {
        diffStateView,
        allStatesAbbrevArr,
        selectedState,
        diffStateCombinedData,
        diffStateSelectData,
        diffStateMapData,
        diffStateHeatMapData,
        diffStateCoords
    } = useContext(DataContext)

    // const diffStateMapData = diffStateCombinedData.map(county => {
    //     return {
    //         lat: county.coordinates[1],
    //         lng: county.coordinates[0],
    //         weight: round( county.vaxCompleted / 
    //             county.population * 100, 2)
    //     }
    // })

    // const diffStateHeatMapData = {
    //     positions: diffStateMapData,
    //     options: {
    //         radius: 90,
    //         opacity: .5
    //     }
    // }
    // console.log(diffStateHeatMapData)

    // const diffStateCoords = allStatesAbbrevArr.filter(state => {
    //     if(state.state === selectedState){
    //         return state
    //     }
    // })
    if(diffStateCoords.length > 0 && diffStateSelectData.length > 0 && diffStateMapData.length > 0 && diffStateCombinedData.length > 0 && diffStateHeatMapData.positions.length > 0 ){
    return (
        <div className='map'>
            <GoogleMapReact
                defaultZoom={8}
                defaultCenter={{
                    lat: diffStateCoords[0].lat, 
                    lng: diffStateCoords[0].lng
                }}
                heatmapLibrary={true}
                heatmap={diffStateHeatMapData}
                bootstrapURLKeys={{ 
                    key: 'AIzaSyAsN_hoIodMYKEkf7Wn2ViTahlOrmYuLns',
                    libraries: ['visualization'] 
                }}
                yesIWantToUseGoogleMapApiInternals
            >
            {diffStateCombinedData.map(county => (
                <Marker 
                    key={county.name}
                    lat={county.coordinates[1]}
                    lng={county.coordinates[0]}
                    text={county.county}
                    countyName={county.name}
                    state={county}
                    percentVaxxed={county.percentVaxxed}
                />
            ))}
            </GoogleMapReact>
        </div>
    )}
}