import React from "react";
import { Button, Card } from "react-bootstrap";
import formatcurrency from "../utilities/formatcurrency";

// const StoreItemprops ={
//     id: Number,
//     name: String,
//     price: Number,
//     time: Number,
//     imgUrl: String

// }

function StoreItem({ id, name, price, time, imgUrl }) {
  // StoreItemprops
  const quantity = 1;

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-6">{time} Minutes</span>
          <span className="ms-2 text-muted">{formatcurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100"> + add to cart</Button>
          ) : (
            <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button>+</Button>
                <div>
                <span className='fs-3'>{quantity} </span> In cart
                </div>
                <Button>-</Button>
              </div>
              <Button variant='danger'>Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
