import React, { Component } from 'react';
import './marker.component.css';

interface MarkerProperties {
    lat: number,
    lng: number,
    style: {
        width: string,
        height: string
    },
}

class MarkerComponent extends Component<MarkerProperties, any>{
    constructor(props: MarkerProperties) {
        super(props);
    }

    componentWillReceiveProps(props: any) {
    }


    render() {
        return (
            <div
                className="marker-container"
                style={this.props.style}
            >
                <img
                    className="marker"
                    src="https://sample-videos.com/img/Sample-jpg-image-500kb.jpg"
                    alt="lake" />
            </div>
        )
    }
}

export default MarkerComponent;