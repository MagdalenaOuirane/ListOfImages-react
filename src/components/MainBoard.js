import React from "react";
import { Row, Col, Card } from "react-bootstrap";




const MainBoard = ({imagesList}) => {

    return (

      <Row className="row-cols-4 mb-4">
        {imagesList.map((imageList) => {
          const { author, width , height, id ,download_url} = imageList;


          return (
            <Col key={imageList.id} className="mb-3">
              <Card border="info" style={{ width: '15rem', height: '34rem' }}>
              <Card.Title>{id}</Card.Title>
                <Card.Img  variant="top" src={download_url} />
                <Card.Body>
                  <Card.Title> Author: {author}   </Card.Title>
                  <Card.Text> Width: {width} </Card.Text>
                  <Card.Text> Height: {height} </Card.Text>
               </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }


  export default MainBoard;



