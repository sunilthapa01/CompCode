import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const HandleChange = () => {
        dispatch(addItem(product))
    }

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{product.title}</h3>
                <p className="text-blue-600 font-bold mb-4">${product.price.toFixed(2)}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors" onClick={HandleChange}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
