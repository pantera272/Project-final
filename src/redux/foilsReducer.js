//const createActionName = actionName => `app/foils/${actionName}`;

export const getAllFoils = (state) => state.foils.data;
export const getFoilById = ({foils}, id) => foils.data.find(foil => foil.id === id);

const foilsReducer = (statePart = [], action) => {
  switch (action.type){
    default:
      return statePart;
  }
}

export default foilsReducer;