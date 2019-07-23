import React, {Component} from 'react';

class Scrawl extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.scrawl.title}</h2>
            </div>
        );
    }
}

export default Scrawl;