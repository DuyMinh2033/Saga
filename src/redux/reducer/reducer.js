import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../action/action";
import { DELETE_DATA_FAILURE, DELETE_DATA_REQUEST, DELETE_DATA_SUCCESS } from "../action/actionDelete";
import { POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS } from "../action/actionPost";


const initialState = {
    loading: false,
    users: [],
    error: "",
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: "",
            };
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload,
            };
        case POST_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case POST_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case POST_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DELETE_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case DELETE_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case DELETE_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default userReducer;
