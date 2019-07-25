import React, { Component } from 'react';

// Visu pour le formulaire de l'édition des dates de scrawl sur un scrawl existant

class ScrawlEdit extends Component {
    handleSubmit(event) {
        event.preventDefault();
        this.props.choicesShow({
                choices: this.props.scrawl.choices,

            }
        );
    }
    render() {
        return (

            <div className="container form-new">
                <h1>{this.props.scrawl.title}</h1>
                    <ul>
                        <li>{this.props.scrawl.choices}</li>
                    </ul>
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <input type="date" placeholder="Scrawl Date" value={this.props.date} onChange={event => this.props.updateChoices(event.target.value)}/>
                        <button type="submit" className="btn button-primary">
                            <i className="fa fa-plus"></i>
                            Ajouter une date
                        </button>
                        </form>
                    <button type="submit" className="btn button-primary">
                        <i className="fa fa-arrow-right"></i>
                        Sauvegarder les modifications
                    </button>
            </div>
        )
    }
}

export default ScrawlEdit;