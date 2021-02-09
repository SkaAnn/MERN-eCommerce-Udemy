import React, { useEffect } from 'react'
// useDispatch - to call an action, useSelector - select part of state
import { useDispatch, useSelector } from 'react-redux'  
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
    // dispatch
    const dispatch = useDispatch()

    // get piece of state - productList
    const productList = useSelector(state => state.productList)
    // parts of reducer
    const { loading, error, products } = productList

    // call listProducts action
    useEffect( () => {
        // FIRE OFF the action
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <h1> Latest Products </h1>
            {/* loading spinner */}
            {loading 
            ? ( <h2>Loading...</h2> )
            : error ? ( <h3>{error}</h3> )
            : (
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>) } 
        </>
    )
}

export default HomeScreen
