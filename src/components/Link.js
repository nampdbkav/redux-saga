import React from "react";

import { connect } from "react-redux";
import { setFilterShow } from "../action/action";

const Link = ({ stateFilter, children, onClick, filter }) => {
    return (
        <button
            onClick={onClick}
            disabled={filter === stateFilter}
        >
            {children}
        </button>
    )
}

const mapStateToProps = (state, ownProps) => ({
    stateFilter: state.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setFilterShow(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)