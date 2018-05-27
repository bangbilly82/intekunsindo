import * as Actions from '../actions/Actions';

const initialState = {
  works: null,
  work: null,
  gallery: null,
  gall: null
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
    case Actions.GET_WORKS_GALLERY:
      return {
        ...state,
        gallery: action.gallery
      }
    case Actions.SET_GALLERY_DETAIL:
      return {
        ...state,
        gall: action.gall
      }
    default:
      return state;
  }
}

export default works;