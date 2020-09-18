import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import ButtonFetchImg from "./components/ButtonFetchImg";
import MainBoard from "./components/MainBoard";
import "./style/App.css";
import "./style/NavBar.css";



const App = () => {
  const [imagesList, setimagesList] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [numberOfCardsPerPage] = useState(3);



  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(data => {
        setimagesList(data)
      })
      .catch(error => {
        console.log('Error happened during fetching!', error);
      });
  });



  //get current Cards
  const indexOfLastCard = currentPage * numberOfCardsPerPage;
  const indexOfFirstCard = indexOfLastCard - numberOfCardsPerPage;
  const currentCards = imagesList.slice(indexOfFirstCard, indexOfLastCard);

  

  return (

    <>
      <Navbar variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand href="/">LIST OF IMAGES</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>

        <ButtonFetchImg numberOfCardsPerPage={numberOfCardsPerPage}  />
        <MainBoard imagesList={currentCards} />

      </Container>

    </>

  )
}



export default App;
