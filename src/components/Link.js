import React from "react";

import { connect } from "react-redux";
import { setFilterShow } from "../action/action";

const Link = ({ active, children, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={active}
        >
            {children}
        </button>
    )
}

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setFilterShow(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)