import React from 'react';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
    // const cartItems = [
    //     { id: 1, title: 'Headphones', price: 99.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60', quantity: 1 },
    //     { id: 2, title: 'Smart Watch', price: 129.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60', quantity: 2 },
    // ];
    const selector = useSelector(state => state.cartItem.items);
    // const countSelector = useSelector(state => state.cartItem.countItems.key);

    console.log(selector);
    console.log(typeof selector);
    // console.log(countSelector);
    

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Shopping Cart</h2>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Cart Items List */}
                    <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
                        {selector.slice(',').length}
                        {selector.slice(',').map(item => (
                            <CartItem key={item.id} item={item} />

                        ))}
                    </div>
                    <div>
                        {}
                    </div>

                    {/* Cart Summary */}
                    <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md h-fit">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h3>
                        <div className="flex justify-between mb-2 text-gray-600">
                            <span>Subtotal</span>
                            <span>$359.97</span>
                        </div>
                        <div className="flex justify-between mb-2 text-gray-600">
                            <span>Tax</span>
                            <span>$28.80</span>
                        </div>
                        <div className="flex justify-between mb-6 text-gray-600">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="border-t pt-4 flex justify-between mb-6">
                            <span className="text-lg font-bold text-gray-800">Total</span>
                            <span className="text-lg font-bold text-gray-800">$388.77</span>
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-colors">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
