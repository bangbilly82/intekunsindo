import * as Actions from '../actions/Actions';

const initialState = {
  works: null,
  work: null
};

function works(state = initialState, action = null) {
  switch (action.type) {
    case Actions.GET_WORKS_CONTENT:
      return {
        ...state,
        works: action.works
      }
    case Actions.SET_WORKS_DETAIL:
      return {
        ...state,
        work: action.work
      }
    default:
      return state;
  }
}

export default works;