import { connect } from "react-redux";
import {} from "../actions/scrawly";
import ScrawlEdit from "../components/ScrawlEdit";


// Envoyer des données du state au componant

const mapStateToProps = state => {
    console.log(state)
    return {
        scrawl: state.scrawly.scrawl
    }
};

// Envoyer des actions au componant

const mapDispatchToProps = dispatch => ({
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrawlEdit)