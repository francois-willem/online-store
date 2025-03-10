import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import { useTotalPrice } from '../components/TotalPriceContext';
import storeLogo from '../assets/store-logo.png'; 
import storeImg1 from '../assets/store-image-1.jpg'; 
import storeImg2 from '../assets/store-image-2.jpg'; 

export default function About() {
  const { totalPrice } = useTotalPrice();

  return (
    <div className="bg-dark text-light min-vh-100 p-4">
      <Container>
        <h1 className="text-center mb-4">About Us</h1>

        <div className="text-center mb-4">
          <h3>Total Price of Products: R{totalPrice}</h3>
        </div>

        {/* Store Logo */}
        <Row className="mb-5 text-center">
          <Col>
            <Figure>
              <Figure.Image
                width={150}
                height={150}
                alt="Store Logo"
                src={storeLogo}
                roundedCircle
              />
              <Figure.Caption className="mt-3">
                Your favorite online store for everything!
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>

        {/* Description */}
        <Row className="mb-4">
          <Col>
            <p className="text-center">
              Welcome to our store! We pride ourselves on offering the best products 
              for all your needs. From gadgets to beauty products, we have everything 
              you need to make life better.
            </p>
          </Col>
        </Row>

        {/* Store Images */}
        <Row className="mb-4">
          <Col md={6} className="text-center">
            <Figure>
              <Figure.Image
                width="100%"
                height="auto"
                alt="Store Image 1"
                src={storeImg1}
                className="rounded"
              />
              <Figure.Caption>Our first fictional store location.</Figure.Caption>
            </Figure>
          </Col>
          <Col md={6} className="text-center">
            <Figure>
              <Figure.Image
                width="100%"
                height="auto"
                alt="Store Image 2"
                src={storeImg2}
                className="rounded"
              />
              <Figure.Caption>Our second fictional store location.</Figure.Caption>
            </Figure>
          </Col>
        </Row>

        {/* Contact Info */}
        <Row className="mt-4 text-center">
          <Col>
            <h3>Contact Us</h3>
            <p>Email: contact@ourstore.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Fictional Lane, Imaginary City</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
