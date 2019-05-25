import { connect } from 'react-redux'
import { setVisibilityFilterAction } from '../actions'
import Link from '../components/link.test';

const mapStateToProps = (state: { visibilityFilter: string }, ownProps: { filter: string }) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Function, ownProps: { filter: string }) => ({
    onClick: () => {
        console.log(ownProps);
        dispatch(setVisibilityFilterAction(ownProps.filter))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)