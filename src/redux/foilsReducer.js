//const createActionName = actionName => `app/foil/${actionName}`;

export const getAllFoils = (state) => state.foils.data;

const foilsReducer = (statePart = [], action) => {
  switch (action.type){
    default:
      return statePart;
  }
}

export default foilsReducer;