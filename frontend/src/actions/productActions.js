import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from "../constants/productConstants"
import axios from 'axios'

// robi to co useEffect
// action creator
// redux thunk - add function to a function
export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const res = await axios.get('/api/products')

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: res.data, })


    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message,
        })
    }
}