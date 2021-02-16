import {
    PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, 
    PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL
} from "../constants/productConstants"

// State for product list
// Reducer takes initialState and action dispatched to reducer
export const productListReducer = (state = { products: [] }, action) => {
    // evaluate object action type
    switch (action.type) {
        // product list request
        case PRODUCT_LIST_REQUEST:  // action
            return { loading: true, products: [] }    // currently fetching - making request

        // product list success - get the data, success res
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload } // data in payload

        // product list fail - error
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }    // error in payload
        default:
            return state
    }
}

// Product Detail
export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {

    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productDeleteReducer = (state = {}, action) => {

    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true }
        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}