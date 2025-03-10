import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';
import { Button, Table } from 'react-bootstrap';

export default function Cart() {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleHelpClick = () => {
    alert("Shipping options:\n- Standard: 5-7 days\n- Overnight: Next-day delivery.");
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
                <th>Color</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.color}</td>
                  <td>R{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => dispatch(removeFromCart({ id: item.id, color: item.color }))}
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
        </>
      )}
    </div>
  );
}
