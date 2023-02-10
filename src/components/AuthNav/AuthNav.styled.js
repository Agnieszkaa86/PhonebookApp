import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavigation = styled.nav`
  display: flex;
  gap: 10px;
`;

export const AuthLink = styled(NavLink)`
  display: flex;
  gap: 10px;
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 250ms linear;
  &.active {
    background-color: #4abda7;
    color: white;
  }
  &:hover,
  &:focus {
    scale: 1.1;
  }
`;