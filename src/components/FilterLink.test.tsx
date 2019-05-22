import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/link.test';

const mapStateToProps = (state: { visibilityFilter: string }, ownProps: { filter: string }) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Function, ownProps: { filter: string }) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)