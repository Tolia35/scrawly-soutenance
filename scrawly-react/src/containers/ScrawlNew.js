import { connect } from "react-redux";
import { scrawlyCreate, updateSlug, updateTitle} from "../actions/scrawly";
import ScrawlNew from "../components/ScrawlNew";


// Envoyer des données du state au componant

const mapStateToProps = state => {
    console.log(state)
    return {
        scrawl: state.scrawly.scrawl,
        id: state.scrawly.scrawl["@id"],
    }
};

// Envoyer des actions au componant

const mapDispatchToProps = dispatch => ({
    updateSlug: slug => dispatch(updateSlug(slug)),
    updateTitle: title => dispatch(updateTitle(title)),
    scrawlyCreate: scrawl => dispatch(scrawlyCreate(scrawl)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrawlNew)