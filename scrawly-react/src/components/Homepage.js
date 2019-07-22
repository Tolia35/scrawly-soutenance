import React from 'react';
function Homepage(props){
    return(
        <React.Fragment>
        <form>
            <input type="text" value={props.slug} onChange={event =>props.updateSlug(event.target.value)}/>
            <button>Rechercher un scrawler</button>
        </form>

        <div>
        <a href="">Creer un scrawler</a>
        </div>
        </React.Fragment>
    );
}
export default Homepage;
