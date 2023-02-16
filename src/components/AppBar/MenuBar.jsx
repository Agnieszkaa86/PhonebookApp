import {useAuth} from '../../hooks/useAuth'
import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { Container, Header } from './MenuBar.styled';

export const MenuBar = () => {
const { isLoggedIn } = useAuth();
  return (
    <div style={{ display: 'block', borderBottom: '1px solid teal' }}>
      <Container>
        <Header>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
      </Container>
    </div>
  );
};