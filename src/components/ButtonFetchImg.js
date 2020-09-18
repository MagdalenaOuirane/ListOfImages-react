import React from "react";
import Button from 'react-bootstrap/Button';



const ButtonFetchImg = ({ paginate, currentPage }) => {


    const number = currentPage + 1;

    return (
        <Button onClick={() => paginate(number)} key={number} style={{ marginBottom: '20px', width: '100px' }} variant="danger" >Next
        </Button>
    )


};


export default ButtonFetchImg;