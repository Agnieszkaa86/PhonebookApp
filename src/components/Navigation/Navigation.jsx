import { useAuth } from '../../hooks/useAuth';
import { Nav, Link } from './Navigation.styled';

export const Navigation = () => {
   const { isLoggedIn } = useAuth();
  return (
    <Nav style={{ display: 'flex', gap: '10px' }}>
      <Link to="/">Home</Link>

      {isLoggedIn && <Link to="/contacts">My contacts</Link>
      }
    </Nav>
  );
};