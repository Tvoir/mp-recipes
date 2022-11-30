import React from 'react';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap"
import RecipeModal from '../RecipeModal'


function RecipeCard({strMeal, strMealThumb, strInstructions }) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body className='d-inline p-1 mx-2' style={{left:'20%'}}>
          <Card.Title className='d-inline-block m-2 mx-4'>{strMeal}</Card.Title>
          <RecipeModal title={strMeal} description={strInstructions} />
        </Card.Body>
      </Card>
    );
  }

export default RecipeCard;