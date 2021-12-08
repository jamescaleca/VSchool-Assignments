import React, { useContext } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker.js'
import { DataContext } from '../contexts/dataProvider'
import { UserContext } from '../contexts/userProvider.js'

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function CountryMap() {
    const defaultProps = {
        center: {
            lat: 39.5,
            lng: -98.35
        },
        zoom: 4.5
    }

    const { 
        stateResData,
        stateResCoord, 
        countiesCombinedData, 
        countyResCoords, 
        onChildClickCallback 
    } = useContext(DataContext)

    const { user: { countyRes } } = useContext(UserContext)


    const data = countiesCombinedData.map(county => {
        return {
            lat: county.coordinates[1],
            lng: county.coordinates[0],
            weight: county.percentVaxxed
        }
    })

    const heatMapData = {
        positions: data,
        options: {
            radius: 100,
            opacity: .5
        },
    }

    return(
        <>
        
        </>
    )
}