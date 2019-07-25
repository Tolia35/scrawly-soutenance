import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


// Visu pour le formulaire de nouveau scrawly ( titre + slug )

class ScrawlNew extends Component {
    handleSubmit(event) {
        event.preventDefault();
        this.props.scrawlyCreate({
                title : this.props.scrawl.title,
                slug: this.props.scrawl.slug,
            }
        );
    }
    render() {
        if (this.props.id){
            return <Redirect to={"/scrawledit/" + this.props.scrawl.slug}/>
        }
        return (
            <div>
                <div>{this.props.error}</div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div>
                        <label for="title">Titre</label>
                        <input type="text" id="title" value={this.props.scrawl.title} placeholder="Titre" onChange={event => this.props.updateTitle(event.target.value)}/>
                    </div>
                    <div>
                        <label for="slug">Slug</label>
                        <input type="text" id="slug" value={this.props.scrawl.slug} placeholder="Slug" onChange={event => this.props.updateSlug(event.target.value)}/>
                    </div>
                    <button type="submit" className="button button-primary">
                        <i className="fa fa-arrow-right"></i>
                        Creer un Scrawler
                    </button>
                </form>
            </div>
        );
    }
}
export default ScrawlNew;