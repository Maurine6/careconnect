import React from 'react';
import MyVideo from './vd1.mp4';

class MyVideoComponent extends React.Component {
    render() {
        return (
            <video width="100%" height="auto" autoPlay loop >
                <source src={MyVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    }
}

export default MyVideoComponent
