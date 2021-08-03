import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function MealCard({ category, image, description }) {
  console.log(category);
  return (
    <div className={'col d-flex justify-content-center'}>
      <Card style={{ width: '50rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{category}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go to {category}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
