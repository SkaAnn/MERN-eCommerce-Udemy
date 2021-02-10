import axios from 'axios'
import { CART_ADD_ITEM} from '../constants/cartConstants'

// getState - get entire state tree
export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch({
        type: CART_ADD_ITEM,
        // veci ktore chceme vytiahnut z db?
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    // save in local storage - local storage api
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
} 