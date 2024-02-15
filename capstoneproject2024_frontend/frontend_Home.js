import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="text-center">Welcome to Cherry Blossom Digital Photo Repository</h1>
          <p className="text-center">Explore our collection of cherry blossom photos.</p>
          <Button variant="primary" href="/library">View Digital Library</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;