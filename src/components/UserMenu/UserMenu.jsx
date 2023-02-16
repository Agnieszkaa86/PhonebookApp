import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaUserCircle } from 'react-icons/fa';

import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Menu, Button, Text } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Menu>
      <IconContext.Provider value={{ color: '#4abda7' }}>
        <FaUserCircle />
      </IconContext.Provider>

      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Menu>
  );
};

