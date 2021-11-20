import { FETCH_CLIENTS_LOADING, FETCH_CLIENTS_SUCCESS } from "../Actions/ClientActions";

const initialState = {
  clients: [],
  isLoading: true
}

export default function client(state = initialState, action) {
  switch (action.type) {
    case FETCH_CLIENTS_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_CLIENTS_SUCCESS: {
      return {
        ...state,
        clients : action.payload,
        isLoading: false,
      };
    }

    default:
      return state;
  }
}
