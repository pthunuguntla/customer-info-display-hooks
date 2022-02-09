import { action } from "../../utils/actionCreator";
import { getCall } from "../../utils/common";
import { API_URL, API_SUCCESS_CODE } from '../constants';

export const ACTIONS = {
  FETCH_CUSTOMERS: "FETCH_CUSTOMERS",
};

const getCustomers = async dispatch => {
  const { response } = await getCall(`${API_URL}customers`);
  if (response != null && response.status === API_SUCCESS_CODE) {
    return dispatch(action(ACTIONS.FETCH_CUSTOMERS, { customers: response.data, message: 'Customers fetched succesfully', isError: false }))
  } else {
    return dispatch(action(ACTIONS.FETCH_CUSTOMERS, { customers: [], isError: true, message: "Could't fetch the Customer data" }))
  }
}

export {
  getCustomers,
}