import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
 const products = [
  {
    id: 1,
    title: 'Headphones',
    price: 99.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    title: 'Smart Watch',
    price: 129.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 3,
    title: 'Camera',
    price: 599.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 4,
    title: 'Sunglasses',
    price: 149.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 5,
    title: 'Backpack',
    price: 79.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 6,
    title: 'Sneakers',
    price: 89.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60'
  }
];

    


    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">All Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
