import React from 'react';

import banner from '../../images/car.jpg';

class Banner extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render(){
    return (
        <div>
            <div className="banner"></div>
            <div className="banner-content">
                <div className="banner-content--left">
                    <h3>{this.props.title}</h3>
                    <span>{this.props.desc}</span>
                </div>

                <img src={banner} className="banner-image" alt="logo" />
            </div>
        </div>

    );
    }
}

export default Banner;