import { connect } from "react-redux";
import { scrawlyCreate, updateSlug, updateTitle} from "../actions/scrawly";
import ScrawlNew from "../components/ScrawlNew";


// Envoyer des données du state scrawl new au componant SN

const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl,
        id: state.scrawly.scrawl["@id"],
    }
};

// Envoyer des action scrawl new au componant SN

const mapDispatchToProps = dispatch => ({
    updateSlug: slug => dispatch(updateSlug(slug)),
    updateTitle: title => dispatch(updateTitle(title)),
    scrawlyCreate: scrawl => dispatch(scrawlyCreate(scrawl)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrawlNew)