import { Link } from 'react-router-dom';
import './HomeButton.css';

const HomeButton = () => (
  <Link to="/" className="home-button">
    <i className="fas fa-home" aria-hidden="true" />
    <span>Home</span>
  </Link>
);

export default HomeButton;