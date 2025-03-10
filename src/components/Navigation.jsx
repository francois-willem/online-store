import React from "react";
import { Link } from "react-router-dom";

export default function Navigation({ loggedInUser }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="navbar-brand" to="/products">Products</Link>
        <Link className="navbar-brand" to="/about">About</Link>
        <Link className="navbar-brand" to="/cart">Cart</Link>
        <Link className="navbar-brand" to="/registration">Registration</Link>

        {loggedInUser ? (
          <span className="navbar-text text-light">Welcome, {loggedInUser.username}!</span>
        ) : (
          <Link className="navbar-brand" to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
