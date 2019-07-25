import React, {Component} from 'react';

// Visu d'un scrawl spécifique via recherche

class Scrawl extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.scrawl.title}</h1>
            </div>
        );
    }
}

export default Scrawl;