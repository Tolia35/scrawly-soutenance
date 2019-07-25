import { connect } from "react-redux";
import {} from "../actions/scrawly";
import Scrawl from "../components/Scrawl";


// Envoyer des données du state scrawl au componant S

const mapStateToProps = state => {
    console.log(state)
    return {
        scrawl: state.scrawly.scrawl
    }
};
// Envoyer des actions du scrawl au componant S

const mapDispatchToProps = dispatch => ({
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Scrawl)