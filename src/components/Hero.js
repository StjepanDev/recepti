import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

export default function Hero() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Happy Meals App</h1>
        <p>This Is A Site Dedicated To Good Food !</p>
      </Container>
    </Jumbotron>
  );
}
