import { Actiontype } from "./type";

const initState = {
    isLoading: false,
    customerPost: {},
};


export const customerReducerPost = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case Actiontype.POST_CUSTOMER_REQUEST:
            return { ...state, isLoading: true };
        case Actiontype.POST_CUSTOMER_REQUEST_SUCCESS:
            return { ...state, customerPost: payload, isLoading: false };
        case Actiontype.POST_CUSTOMER_REQUEST_FAILED:
            return { ...state, customerPost: payload, isLoading: false };
        case Actiontype.CLEAN_UP:
            return initState;
        default:
            return state;
    }
}