import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0,
        tags: ['tags1', 'tags2', 'tags3']
    };

    styles = {
        fontSize: 30,
        fontWeight: "bold"
    };

    render() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";

        return (
            <React.Fragment>
                <span style={this.styles} className={classes}>
                    {this.formatCount()}
                </span>
                <button className="btn btn-secondary btn-sm">+Incse+</button>
                <ul>
                    {this.state.tags.map(
                        tag =>
                            <li key={tag}>
                                {tag}
                            </li>)
                    }
                </ul>
            </React.Fragment>
        );
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zeroooooo' : count;

    }
}
