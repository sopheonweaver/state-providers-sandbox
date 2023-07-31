import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <Link to="/">Context</Link> | <Link to="/redux">Redux</Link> | <Link to="/zustand">Zustand</Link>
    </div>
  );
};

export default Footer;
