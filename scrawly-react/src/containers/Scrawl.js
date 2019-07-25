import { connect } from "react-redux";
import {scrawlyShow} from "../actions/scrawly";
import Scrawl from "../components/Scrawl";


// Envoyer des données du state scrawl au componant S

const mapStateToProps = state => {
    console.log(state)
    return {
        scrawl: state.scrawly.scrawl,
        error: state.scrawly.error
    }
};
// Envoyer des actions du scrawl au componant S

const mapDispatchToProps = dispatch => ({
    show: slug=>dispatch(scrawlyShow(slug))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Scrawl)