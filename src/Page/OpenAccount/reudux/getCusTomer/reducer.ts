import { Actiontype } from "./type";


const initState = {
    isLoading: false,
    customer: {},
};


export const customerReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case Actiontype.GET_CUSTOMER_REQUEST:
            return { ...state, isLoading: true };
        case Actiontype.GET_CUSTOMER_REQUEST_SUCCESS:
            return { ...state, customer: payload, isLoading: false };
        case Actiontype.GET_CUSTOMER_REQUEST_FAILED:
            return { ...state, customer: payload, isLoading: false };
        case Actiontype.CLEAN_UP:
            return initState;
        default:
            return state;
    }
}