import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productsSlice';

export const Products = () => {
    const { product, isLoading, error } = useSelector((store) => store.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    let content;
    if (isLoading) {
        content = <h2>loading ...</h2>
    }
    if(error){
        content = <h2>{error}</h2>
    }
    if (!isLoading && product.length < 1) {
        content = <h2>Product not found</h2>
    }
    if (product.length > 0) {
        content = <ul>
            {product.map(p =>
                <li key={p.id}>{p.title}</li>
            )}
        </ul>
    }

    return (
        <div>
            {content}
        </div>
    )
}
