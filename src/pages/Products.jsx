import React, { useState } from 'react';
import { Card, Button, Dropdown, DropdownButton, Row, Col, Container } from 'react-bootstrap';
import { useTotalPrice } from '../components/TotalPriceContext';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import product1 from '../assets/camera.jpg';
import product2 from '../assets/glasses.jpg';
import product3 from '../assets/grip-master.jpg';
import product4 from '../assets/gym-weights.jpg';
import product5 from '../assets/headphones.jpg';
import product6 from '../assets/kettlebell.jpg';
import product7 from '../assets/leather-shoes.jpg';
import product8 from '../assets/lipstick.jpg';
import product9 from '../assets/microphone.jpg';
import product10 from '../assets/nail-gel.jpg';

const products = [
  {
    id: 1,
    title: 'Camera',
    description: 'Capturing all your favourite and embarrassing moments',
    price: 2000,
    image: product1,
    colours: ['Red', 'Blue', 'Green'],
  },
  {
    id: 2,
    title: 'Sun Glasses',
    description: 'For those sunny days',
    price: 800,
    image: product2,
    colours: ['Black', 'Grey', 'Red'],
  },
  {
    id: 3,
    title: 'Grip strengthener',
    description: 'To strengthen those forearms ',
    price: 200,
    image: product3,
    colours: ['Black', 'Pink', 'Blue'],
  },
  {
    id: 4,
    title: 'Weight plates',
    description: 'Your gym cannot have enough plates',
    price: 500,
    image: product4,
    colours: ['Black', 'Yellow', 'Blue'],
  },
  {
    id: 5,
    title: 'Headphones',
    description: 'For listening your favourite artists while working',
    price: 1000,
    image: product5,
    colours: ['Black', 'White', 'Blue'],
  },
  {
    id: 6,
    title: 'Kettlebell',
    description: 'Swing those calories away',
    price: 300,
    image: product6,
    colours: ['Black', 'Yellow', 'Orange'],
  },
  {
    id: 7,
    title: 'Leather Shoes',
    description: 'You need to look good on date night',
    price: 2000,
    image: product7,
    colours: ['Black', 'Brown', 'White'],
  },
  {
    id: 8,
    title: 'Lipstick',
    description: 'For the women who want to look beautiful on a night out',
    price: 250,
    image: product8,
    colours: ['Red', 'Pink', 'Plum'],
  },
  {
    id: 9,
    title: 'Microphone',
    description: 'Karaoke nights to remember',
    price: 900,
    image: product9,
    colours: ['Black', 'Grey', 'White'],
  },
  {
    id: 10,
    title: 'Nail polish',
    description: 'Your nails will never look better',
    price: 150,
    image: product10,
    colours: ['Grey', 'Pink', 'Blue'],
  },

];

export default function Products() {
  const { totalPrice, updateTotalPrice } = useTotalPrice();
  const [selectedColours, setSelectedColours] = useState({});
  const dispatch = useDispatch();

  const handleBuy = (product) => {
    const selectedColour = selectedColours[product.id]; // Get the selected colour
    const productWithColour = { ...product, colour: selectedColour }; // Add colour to the product
    updateTotalPrice(product.price);
    dispatch(addToCart(productWithColour)); // Pass the product with colour to the cart
  };

  const handleColourChange = (productId, colour) => {
    setSelectedColours({ ...selectedColours, [productId]: colour });
  };

  return (
    <div className="bg-dark text-light min-vh-100">
      <Container className="py-4">
        {/* Display Total Price Component */}
        <div className="text-end mb-3">
          <h4>Total Price: R{totalPrice}</h4>
        </div>


        <h1 className="mb-4">Our Products</h1>

        {/* Product Cards */}
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 ms-lg-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card className="h-100 shadow-lg">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>
                    <strong>Price: R{product.price}</strong>
                  </Card.Text>

                  <DropdownButton
                    title={selectedColours[product.id] || 'Select Colour'}
                    onSelect={(e) => handleColourChange(product.id, e)}
                    className="mb-2"
                  >
                    {product.colours.map((colour) => (
                      <Dropdown.Item key={colour} eventKey={colour}>
                        {colour}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>

                  <Button
                    variant="primary"
                    onClick={() => handleBuy(product)}
                    style={{ marginTop: '10px' }}
                  >
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
