import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
export default class Profile extends Component {
    render() {
        return (
            <div className="flex w-full justify-center">
                <h1 className="text-lg text-white mt-10 p-5 rounded-lg bg-black">
                    Welcome to my Awesome Profile
                </h1>
            </div>
        );
    }
}
