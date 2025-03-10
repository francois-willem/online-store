import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white"
    >
      <div className="text-center">
        <h1 className="mb-4">Welcome to My Store</h1>
        <p>Explore our wide range of products and find what you need!</p>
      </div>
    </div>
  );
}
