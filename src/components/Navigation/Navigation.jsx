import { useAuth } from '../../hooks/useAuth';
import { NavBar, BarLink } from './Navigation.styled';

export const Navigation = () => {
   const { isLoggedIn } = useAuth();
  return (
    <NavBar style={{ display: 'flex', gap: '10px' }}>
      <BarLink to="/">Home</BarLink>

      {isLoggedIn && <BarLink to="/contacts">My contacts</BarLink>}
    </NavBar>
  );
};