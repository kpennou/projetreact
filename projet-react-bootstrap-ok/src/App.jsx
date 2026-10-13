import React from 'react'
import { Navbar, Nav, Container, Card, Row, Col } from 'react-bootstrap'

function App() {
  return (
    // Création d'un Fragment React
    <>
      <div className="App">
        
        {/* 1. Barre de navigation (Navbar) */}
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="#accueil">Mon Application</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#accueil">Accueil</Nav.Link>
                <Nav.Link href="#projet">Projet</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* 2. En-tête (Header) */}
        <header className="bg-light py-5 text-center border-bottom">
          <Container>
            <h1 className="display-4">Bienvenue sur mon projet React</h1>
            <p className="lead text-muted">Développé avec Vite et React-Bootstrap</p>
          </Container>
        </header>

        {/* 3. Les 3 Cartes (Cards) */}
        <Container className="my-5">
          <Row>
            {/* Carte 1 */}
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/300/200?random=1" />
                <Card.Body>
                  <Card.Title>Carte Numéro 1</Card.Title>
                  <Card.Text>
                    Voici le contenu de la première carte. React-Bootstrap rend 
                    la mise en page très facile grâce à ses composants intégrés.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Carte 2 */}
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/300/200?random=2" />
                <Card.Body>
                  <Card.Title>Carte Numéro 2</Card.Title>
                  <Card.Text>
                    Voici le contenu de la deuxième carte. L'utilisation de Vite 
                    permet un rechargement ultra-rapide pendant le développement.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Carte 3 */}
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/300/200?random=3" />
                <Card.Body>
                  <Card.Title>Carte Numéro 3</Card.Title>
                  <Card.Text>
                    Voici le contenu de la troisième carte. N'oubliez pas d'importer 
                    les composants depuis 'react-bootstrap' !
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </div>
    </>
  );
}

export default App;