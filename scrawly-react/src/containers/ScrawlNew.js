import { connect } from "react-redux";
import {} from "../actions/scrawly";
import ScrawlNew from "../components/ScrawlNew";


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
)(ScrawlNew)