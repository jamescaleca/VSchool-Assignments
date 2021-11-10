import React from 'react'
import GoogleMapReact from 'google-map-react'
// import { DataContext } from '../contexts/dataProvider'

// const {allStatesAbbrevArr} = {DataContext}

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function CountyMap(props) {
    const defaultProps = {
        center: {
            lat: 39.5,
            lng: -98.35
        },
        zoom: 4.5
    }

    const {stateResCoord, countyCoordsData, countyRes} = props

    console.log('countyCoords: ', countyCoordsData[0], 'W ', countyCoordsData[1], 'N' )

    return (
        <>
        {stateResCoord ? 
            <div style={{ height: '65vh', width: '80%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAsN_hoIodMYKEkf7Wn2ViTahlOrmYuLns' }}
                    defaultCenter={{lat: countyCoordsData[1], lng: countyCoordsData[0]}}
                    defaultZoom={6.5}
                >
                    <AnyReactComponent 
                        lat={countyCoordsData[1]}
                        lng={countyCoordsData[0]}
                        text={countyRes}
                    />
                </GoogleMapReact>
            </div> :
            <div style={{ height: '65vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAsN_hoIodMYKEkf7Wn2ViTahlOrmYuLns' }}
                    defaultCenter={defaultProps.center }
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent 
                        lat={defaultProps.center.lat}
                        lng={defaultProps.center.lng}
                        text='My marker'
                    />
                </GoogleMapReact>
        </div>
        }
        </>
        
    )
}