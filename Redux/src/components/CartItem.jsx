import React from 'react';

const CartItem = ({ item }) => {
    return (
        <div className="flex items-center justify-between border-b py-4">
            <div className="flex items-center space-x-4">
                <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded">
                    <button className="px-3 py-1 hover:bg-gray-100 transition-colors" onClick={() => {
                        console.log(item.quantity - 1)
                    }}>-</button>
                    <span className="px-3 py-1 border-l border-r">{item.quantity}</span>
                    <button className="px-3 py-1 hover:bg-gray-100 transition-colors" onClick={() => {
                        console.log(item.quantity + 1)
                    }}>+</button>
                </div>
                <button className="text-red-500 hover:text-red-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CartItem;
