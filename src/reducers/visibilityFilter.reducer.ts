import { VisibilityFilters } from '../actions'

export interface filterState {
    filter: string
}

export const visibilityFilter = (state: filterState = { filter: VisibilityFilters.SHOW_ALL }, action: any) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return { filter: action.payload.filter }
        default:
            return state
    }
}

// export default visibilityFilter