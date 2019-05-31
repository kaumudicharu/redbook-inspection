import React, { Component } from "react";
import { withRouter } from "react-router";
import {fetchAllPosts} from '../../api/PostApi';

class Post extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { data: [] };
    }

    fetchData() {
        fetchAllPosts()
            .then((data: any) => {
                this.setState({ data: data });
                this.setState({ isLoading: true });
            })
            .catch(console.log);
    }

    goToPostItem(id: string) {
        this.props.history.push('/posts/' + id);
    }

    isPostLiked(id: string): boolean {
        let localStorageValue = localStorage.getItem("LikedPosts");
        if (localStorageValue) {
            let likedPosts = JSON.parse(localStorageValue.toString());
            if (likedPosts) {
                if (likedPosts.indexOf(id) > -1) {
                    return true;
                }
            }
        }

        return false;
    }


    componentDidMount() {
        this.fetchData();
    }

    render() {

        return (
            <div className="content">
                {this.state.data.map((item: any, index: number) => {
                    return <div key={index} className={"post-item " + (this.isPostLiked(item.id) ? 'liked-post' : '')} onClick={() => this.goToPostItem(item.id)} >
                        <div className="post-item--title">{item.title}</div>
                        <div className="post-item--body">{item.body}</div>
                    </div>;
                })}
            </div>
        )
    }
}

export default withRouter(Post);