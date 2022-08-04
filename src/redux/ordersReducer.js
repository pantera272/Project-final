import axios from 'axios'; 

export const getAllOrders = (state) => state.orders;

const createActionName = actionName => `app/orders/${actionName}`;

const ADD_ORDER = createActionName('ADD_ORDER');
export const addOrder = payload => ({type: ADD_ORDER, payload});

export const addOrderRequest = (order) => async dispatch => {
  try {
    const res = await axios({
      method: 'post',
      url: 'http://localhost:8000/api/orders',
      data: order,
    });
  } catch (err) {
    console.log(err);
  }
};


const ordersReducer = (statePart = [], action) => {
  switch (action.type){
    case ADD_ORDER:
      return [...statePart, {...action.payload}];
    default:
      return statePart;
  }
}

export default ordersReducer;