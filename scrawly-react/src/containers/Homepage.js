import { connect } from "react-redux";
import { updateSlug, scrawlyShow } from "../actions/scrawly";
import Homepage from "../components/Homepage";

// Envoyer des données du state HP au composant HP

const mapStateToProps = state => {
    console.log(state)
    return {
        slug: state.scrawly.scrawl.slug,
        id: state.scrawly.scrawl["@id"]
    }
};
// Envoyer des actions HP au composant HP

const mapDispatchToProps = dispatch => ({
    updateSlug: slug => dispatch(updateSlug(slug)),
    show: slug => dispatch(scrawlyShow(slug))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage)