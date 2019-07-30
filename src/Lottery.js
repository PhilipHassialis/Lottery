import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";
export default class Lottery extends Component {
    static defaultProps = {
        title: "Lotto",
        maxNum: 40,
        numBalls: 6
    };

    state = { nums: Array.from({ length: this.props.numBalls }) };

    generate = () => {
        // old version
        // this.setState(curState => ({
        //     nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
        // }));

        let arr = [];

        while (arr.length < this.props.numBalls) {
            let random = Math.floor(Math.random() * this.props.maxNum) + 1;
            if (arr.indexOf(random) === -1) {
                arr.push(random);
            }
        }

        this.setState({
            nums: [...arr]
        });
    };

    handleClick = e => {
        this.generate();
    };

    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {this.state.nums.map(n => (
                        <Ball num={n} />
                    ))}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </section>
        );
    }
}
