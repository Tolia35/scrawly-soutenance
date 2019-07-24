import React, { Component } from 'react';

// Visu pour le formulaire de création d'un nouveau scrawl

class ScrawlNew extends Component {
    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div>
                        <label for="title">Titre</label>
                        <input type="text" id="title" value={this.props.scrawl.title} onChange={event => this.props.updateTitle(event.target.value)}/>
                    </div>

                    <div>
                        <label for="slug">Slug</label>
                        <input type="text" id="slug" value={this.props.scrawl.slug} onChange={event => this.props.updateSlug(event.target.value)}/>
                    </div>
                    <button type="submit" className="button button-primary">
                        <i class="fa fa-arrow-right"></i>
                        Creer le nouveau Scrawly
                    </button>
                </form>
            </div>
        );
    }
}

export default ScrawlNew;