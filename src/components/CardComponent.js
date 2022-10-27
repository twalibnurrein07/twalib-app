import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardComponent({image,price}) {
  

  return (
   <div className='col-4'>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{ height: '400px' ,objectFit:'cover'}}/>
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text>
          {price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   </div>

   

  );
}

export default CardComponent;