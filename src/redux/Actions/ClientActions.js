import { fetchClientsAPI } from "../../API";

export const FETCH_CLIENTS_LOADING = "FETCH_CLIENTS_LOADING ";
export const FETCH_CLIENTS_SUCCESS = "FETCH_CLIENTS_SUCCESS";

const fetchClientsSuccess = (data) => {
  return {
    type: FETCH_CLIENTS_SUCCESS,
    payload: data
  };
};

const fetchClientsLoading = () => {
  return {
    type: FETCH_CLIENTS_LOADING,
  };
};



export const fetchClients = () => {
  return (dispatch) => {
    dispatch(fetchClientsLoading());
    return fetchClientsAPI()
      .then((res) => {
        // console.log(res)
        const data = (res.data) || [];
        const clients = {
          clients: data
        }

        console.log(clients)
        console.log(data)
        dispatch(fetchClientsSuccess(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


