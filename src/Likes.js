import { Component } from "react";

export class Likes extends Component {
    constructor() {
        super();

        this.state = {
            user: "Kseniya",
            age: 30
        }
    }

    updateLikes() {
        this.setState({user: "Mari!"})
        this.setState({age: 40})
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.user} </h1>
                <h2>My age {this.state.age}</h2>
                <button onClick = {() => this.updateLikes()}>Like</button>
            </div>
        )
    }
}