import axios from 'axios';

const createActionName = actionName => `app/foils/${actionName}`;

export const getAllFoils = (state) => state.foils.data;
export const getFoilById = ({foils}, id) => foils.data.find(foil => foil.id === id);

const FETCH_START = createActionName('FETCH_START');
export const fetchStarted = payload => ({ payload, type: FETCH_START });

const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });

const FETCH_ERROR = createActionName('FETCH_ERROR');
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const fetchStart = () => {
  return (dispatch) => {
    dispatch(fetchStarted());

    axios
      .get('http://localhost:8000/api/foils')
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

const foilsReducer = (statePart = [], action) => {
  switch (action.type){
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
          success: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          success: true,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
          success: false,
        },
      };
    }
    default:
      return statePart;
  }
}



export default foilsReducer;