import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from "react";
import { removeFromCart, clearCart } from '../redux/cartSlice';
import { Button, Table, Dropdown, DropdownButton } from 'react-bootstrap';

export default function Cart() {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleHelpClick = () => {
    alert("Shipping options:\n- Standard: 5-7 days\n- Overnight: Overnight Shipping (1 day).");
  };  

  const [shippingMethod, setShippingMethod] = useState(localStorage.getItem("shippingMethod") || "Standard Shipping");

  const handleShippingChange = (eventKey) => {
    setShippingMethod(eventKey);
    localStorage.setItem("shippingMethod", eventKey);
  };

  return (
    <div className="bg-dark text-light min-vh-100 p-4">
      <h1 className="mb-4">Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Product</th>
                <th>Colour</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.colour}</td>
                  <td>R{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => dispatch(removeFromCart({ id: item.id, colour: item.colour }))}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <button onClick={handleHelpClick} className="btn btn-info mt-3">Help</button>
          <h4 className="mt-4">Total Amount: R{totalAmount}</h4>
          <Button variant="danger" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </Button>
          <h1>Your Shopping Cart</h1>

          <div>
          <label>Select Shipping Method:</label>
          <DropdownButton
            title={shippingMethod}
            onSelect={handleShippingChange}
            className="mb-2"
          >
            <Dropdown.Item eventKey="Standard Shipping (5-7 days)">Standard Shipping (3-5 days)</Dropdown.Item>
            <Dropdown.Item eventKey="Overnight Shipping (1 day)">Overnight Shipping (1 day)</Dropdown.Item>
          </DropdownButton>
          </div>

          <p>Selected Shipping: {shippingMethod === "standard" ? "Standard (3-5 days)" : "Overnight (1 day)"}</p>

          <Button>Proceed to Checkout</Button>
        </>
        
      )}
    </div>
  );
}
