import { connect } from "react-redux";
import { updateChoices, choicesCreate, choicesShow} from "../actions/scrawly";
import ScrawlEdit from "../components/ScrawlEdit";


// Envoyer des données du state scrawl edit au componant scrawl edit

const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl
    }
};

// Envoyer des actions du scrawl edit  au componant scrawl edit

const mapDispatchToProps = dispatch => ({
    updateChoices: choices=> dispatch(updateChoices(choices)),
    choicesCreate: choices=>dispatch(choicesCreate(choices)),
    choicesShow: choices=>dispatch(choicesShow(choices)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrawlEdit)