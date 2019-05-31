import React from "react";
import Banner from "../banner/Banner";

import {fetchPostById} from '../../api/PostApi';
import {fetchUserById} from '../../api/UserApi';

class PostItem extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { data: {}, userData: {} };
    }

    fetchData() {
        fetchPostById(this.props.match.params.id)
            .then((data) => {
                this.fetchUserData(data.userId)
                    .then((userData) => {
                        this.setState({ data: data, userData: userData });
                    })
                    .catch(console.log);
            })
            .catch(console.log);
    }

    fetchUserData(id: string) {
        return fetchUserById(id);
    }

    componentDidMount() {
        this.fetchData();
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

    like() {

        let localStorageValue = localStorage.getItem("LikedPosts");
        if (localStorageValue) {
            let likedPosts = JSON.parse(localStorageValue.toString());
            if (likedPosts) {
                if (likedPosts.indexOf(this.state.data.id) === -1) {
                    likedPosts.push(this.state.data.id)
                    localStorage.setItem("LikedPosts", JSON.stringify(likedPosts));
                }
            } else {
                let likedPosts = [this.state.data.id];
                localStorage.setItem("LikedPosts", JSON.stringify(likedPosts));
            }
        } else {
            let likedPosts = [this.state.data.id];
            localStorage.setItem("LikedPosts", JSON.stringify(likedPosts));
        }
    }

    unlike() {

        let localStorageValue = localStorage.getItem("LikedPosts");
        if (localStorageValue) {
            let likedPosts: string[] = JSON.parse(localStorageValue.toString());
            if (likedPosts) {
                if (likedPosts.indexOf(this.state.data.id) > -1) {
                    let index = likedPosts.findIndex(x=> x===this.state.data.id);
                    likedPosts.splice(index, 1)
                    localStorage.setItem("LikedPosts", JSON.stringify(likedPosts));
                }
            }
        }
    }

    render() {
        const desc = this.state.userData.company ? this.state.userData.company.name : "";
        let actionItem = this.isPostLiked(this.state.data.id) ?
            <button className="actions-button" onClick={() => this.unlike()}>Unlike</button> :
            <button className="actions-button" onClick={() => this.like()}>Like</button>
        return (
            <div>
                <Banner title={this.state.userData.name} desc={desc}></Banner>
                <div className="content">
                    <div className="post-item--header">{this.state.data.title}</div>
                    <div className="post-item--body">{this.state.data.body}</div>

                    <div className="actions">
                        {actionItem}
                    </div>
                </div>
            </div>
        )
    }

}

export default PostItem;