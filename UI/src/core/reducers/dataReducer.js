import { ACTIONS } from "../api";



export const initialState = {
  customers: [],
  isError: false,
  message: ""
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_CUSTOMERS:
      return {
        ...state,
        customers: action.customers,
        message: action.message,
        isError: action.isError
      }
    default: {
      return state
    }
  }
}

export default dataReducer;


