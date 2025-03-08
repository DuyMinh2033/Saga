export const DELETE_DATA_REQUEST = 'DELETE_DATA_REQUEST';
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE';

export const DeleteDataRequest = (data) => ({
  type: DELETE_DATA_REQUEST,
  payload: data,
});

export const DeleteDataSuccess = (response) => ({
  type: DELETE_DATA_SUCCESS,
  payload: response,
});

export const DeleteDataFailure = (error) => ({
  type: DELETE_DATA_FAILURE,
  payload: error,
});
