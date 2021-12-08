import React, { useContext } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker.js'
import { round } from 'mathjs'
import { DataContext } from '../contexts/dataProvider'
import { UserContext } from '../contexts/userProvider.js'

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function CountyMap() {
    const defaultCountryProps = {
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
        onChildClickCallback ,
        countryView,
        allStatesData
    } = useContext(DataContext)

    const { user: { countyRes } } = useContext(UserContext)

    const countyData = countiesCombinedData.map(county => {
        return {
            lat: county.coordinates[1],
            lng: county.coordinates[0],
            weight: county.percentVaxxed
        }
    })

    const allStatesMappedData = allStatesData.map(state => {
        return {
            lat: state.coordinates[0].lat,
            lng: state.coordinates[0].lng,
            weight: round( state.vaxCompleted / 
                state.population * 100, 2
            )
        }
    })

    const countyHeatMapData = {
        positions: countyData,
        options: {
            radius: 100,
            opacity: .5
        },
    }

    const countryHeatMapData = {
        positions: allStatesMappedData,
        options: {
            radius: 100,
            opacity: .5
        }
    }

    return (
        <>
        {countryView === false ?
            <>{stateResData !== {} ? 
            <div className='map' >
                <GoogleMapReact
                    bootstrapURLKeys={{ 
                        key: 'AIzaSyAsN_hoIodMYKEkf7Wn2ViTahlOrmYuLns',
                        libraries: ['visualization'] 
                    }}
                    defaultCenter={{
                        lat: stateResData.coordinates[0].lat, 
                        lng: stateResData.coordinates[0].lng
                    }}
                    defaultZoom={8}
                    heatmap={countyHeatMapData}
                    onChildClick={onChildClickCallback}
                >
                    {countiesCombinedData.map(county => (
                        <Marker 
                            key={county.county}
                            lat={county.coordinates[1]}
                            lng={county.coordinates[0]}
                            show={county.show}
                            text={county.county}
                            countyName={county.county}
                            county={county}
                            percentVaxxed={county.percentVaxxed}
                        />
                    ))}
                </GoogleMapReact>
            </div> 
            :
            <div className='map'>
                <GoogleMapReact
                    bootstrapURLKeys={{ 
                        key: 'AIzaSyAsN_hoIodMYKEkf7Wn2ViTahlOrmYuLns',
                        libraries: ['visualization']
                    }}
                    center={defaultCountryProps.center }
                    defaultZoom={defaultCountryProps.zoom}
                >
                    <AnyReactComponent 
                        lat={defaultCountryProps.center.lat}
                        lng={defaultCountryProps.center.lng}
                        text='My marker'
                    />
                </GoogleMapReact>
            </div>
            } </> : 
            <>
            {stateResData !== {} ?  
            <div className='map' >
                <GoogleMapReact
                    bootstrapURLKeys={{ 
                        key: 'AIzaSyAsN_hoIodMYKEkf7Wn2ViTahlOrmYuLns',
                        libraries: ['visualization'] 
                    }}
                    defaultCenter={{
                        lat: defaultCountryProps.center.lat, 
                        lng: defaultCountryProps.center.lng
                    }}
                    defaultZoom={5}
                    heatmap={countryHeatMapData}
                    onChildClick={onChildClickCallback}
                >
                    {allStatesData.map(state => (
                        <Marker 
                            key={state.name}
                            lat={state.coordinates[0].lat}
                            lng={state.coordinates[0].lng}
                            text={state.name}
                            countyName={state.name}
                            state={state}
                            percentVaxxed={round(state.vaxCompleted / state.population * 100, 2)}
                        />
                    ))}
                </GoogleMapReact>
            </div> 
            : 
            <div className='map'>
                <GoogleMapReact
                    bootstrapURLKeys={{ 
                        key: 'AIzaSyAsN_hoIodMYKEkf7Wn2ViTahlOrmYuLns',
                        libraries: ['visualization']
                    }}
                    center={defaultCountryProps.center }
                    defaultZoom={defaultCountryProps.zoom}
                >
                    <AnyReactComponent 
                        lat={defaultCountryProps.center.lat}
                        lng={defaultCountryProps.center.lng}
                        text='My marker'
                    />
                </GoogleMapReact>
            </div>
            
            }
            </>
        }
        
        </>
    )
}