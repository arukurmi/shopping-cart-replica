import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };

    styles = {
        fontSize: 30,
        fontWeight: "bold"
    };

    // redertags(){
    //     if (this.state.tags.length === 0){
    //         return(
    //             <p><h1>Aryansh is dumb!</h1></p>
    //         )
    //     }
    //     else 
    // }

    handleIncreament = () => {
        this.setState( {count:this.state.count+1 });
    }
    
    render() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return (
            <React.Fragment>
                <span style={this.styles} className={classes}>
                    {this.formatCount()}
                </span>
                <button onClick = {this.handleIncreament} className="btn btn-secondary btn-sm">+Incse+</button>
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
        return count === 0 ? 0 : count;

    }
}
