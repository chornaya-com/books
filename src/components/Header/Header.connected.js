import {selectIsLoading} from "../../selectors/selectors";
import {connect} from "react-redux";
import {Header} from "./Header";

function mapStateToProps(state) {
    return {
        isLoading: selectIsLoading(state),
    }
}

export const HeaderConnected = connect(mapStateToProps)(Header);