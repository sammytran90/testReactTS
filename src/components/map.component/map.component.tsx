import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MarkerComponent from '../marker.component/marker.component';

class MapComponent extends Component<any, any>{
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    }
    constructor(props: any) {
        super(props)


        this.state = {
            imageStyle: {
                width: 1.5 * Math.pow(2, this.props.zoom - 10 > 0 ? this.props.zoom.zoom - 10 : 0) + 'px',
                height: 1.5 * Math.pow(2, this.props.zoom - 10 > 0 ? this.props.zoom.zoom - 10 : 0) + 'px',
            }
        }

    }

    handleGoogleMapComponent(map: any, maps: any) {
        map.addListener('zoom_changed', () => {
            this.setState({
                imageStyle: {
                    width: 1.5 * Math.pow(2, map.zoom - 10 > 0 ? map.zoom - 10 : 0) + 'px',
                    height: 1.5 * Math.pow(2, map.zoom - 10 > 0 ? map.zoom - 10 : 0) + 'px',
                }
            })
        })
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCiUbhkVHnpzpgrnCEBjcatyCMdNvnS4wQ' }}
                    defaultCenter={this.props.center}
                    zoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }: { map: any, maps: any }) => this.handleGoogleMapComponent(map, maps)}
                >

                    <MarkerComponent
                        lat={59.955413}
                        lng={30.337844}
                        style={this.state.imageStyle}
                    ></MarkerComponent>

                </GoogleMapReact>
            </div>
        )
    }
}

export default MapComponent;