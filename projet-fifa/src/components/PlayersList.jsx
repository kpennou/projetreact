import { Container, Row, Col } from 'react-bootstrap';
import Player from './Player';
import players from '../players';

function PlayersList() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5 fw-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        ⚽ Équipe FIFA 2024
      </h1>
      
      <Row>
        {/* Utilisation de player.id pour la key */}
        {players.map((player) => (
          <Col key={player.id} md={6} lg={4} className="mb-4">
            {/* Le spread operator {...player} passe toutes les propriétés en props */}
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PlayersList;