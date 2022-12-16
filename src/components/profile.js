import React, { Component } from "react";

class Profile extends React.Component{
    constructor(){
        super();
        this.state = {
            profession : "Ingénieur en Mécatronique",
            Bio : "i'm a Web Dev Student "
        }
    }

    render(){
        let pro = this.state.profession;
        let bio = this.state.Bio
        return (
            <div>
            <center><img style={{width:200}} src="https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-120.jpg?w=2000" alt="MyProfilePhoto"></img></center>
            <center><div style={{fontWeight:'bold',color:"red"}}><i>Hello , I'm {pro} and {bio}</i></div></center>
            </div>
        )
    }
}

export default Profile;