import React from 'react';

import banner from '../../images/car.jpg';
import Post from '../posts/Post';
import Banner from '../banner/Banner';

class Home extends React.Component<any, any> {
    render() {
        const title = "RedBook Inspection Blog"
        const desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
        return (
            <div >
                <Banner title={title} desc={desc}></Banner>
                <Post></Post>
            </div>
        );
    }
}

export default Home;