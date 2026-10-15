import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

// Valeurs par défaut directement dans la déstructuration
const Player = ({ 
  name = "Joueur Inconnu", 
  team = "Équipe Inconnue", 
  nationality = "Nationalité Inconnue", 
  jerseyNumber = 0, 
  age = 0, 
  image = "https://via.placeholder.com/150?text=Pas+d'image" 
}) => {
  
  // STYLES
  const cardStyle = {
    border: '2px solid #FFD700', 
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    marginBottom: '20px',
    backgroundColor: '#fff'
  };

  const imageStyle = {
    height: '200px',
    objectFit: 'cover',
    borderTopLeftRadius: '13px', // Légèrement inférieur au border-radius de la carte
    borderTopRightRadius: '13px'
  };

  const nameStyle = {
    color: '#1e3a8a',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  };

  const badgeStyle = {
    backgroundColor: '#FFD700', // Harmonisé avec la bordure
    color: '#1e3a8a',
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 'bold'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img 
        variant="top" 
        src={image} 
        alt={`Photo de ${name}`}
        style={imageStyle}
      />
      
      <Card.Body>
        <Card.Title style={nameStyle}>{name}</Card.Title>
        
        <div className="d-flex flex-column gap-2 mt-3">
          <div>
            <strong>Équipe :</strong> {team}
          </div>
          <div>
            <strong>Nationalité :</strong> {nationality}
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <div>
              <strong>Âge :</strong> {age} ans
            </div>
            <span style={badgeStyle}>
              #{jerseyNumber}
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

// Validation des types
// Note: les valeurs par défaut gèrent l'absence de prop
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  image: PropTypes.string,
};

export default Player;