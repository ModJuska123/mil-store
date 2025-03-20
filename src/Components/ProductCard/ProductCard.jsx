import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardImg} from 'react-bootstrap'

 const ProductCard = props => {

    let {imgSrc, price, title} = props.data;
      return (

      <Card className="p-0 overflow-hi dden h-100 shadow">
        <div className="overflow-hidden rounded p-0 bg-light">
          <Card.Img variant="top" src={imgSrc} />
        </div>

        <Card.Body className="text-center">
          <Card.Title className="display-7">{price}</Card.Title>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    )
 
  }

export default ProductCard;
