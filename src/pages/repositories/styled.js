import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`;

export const list = styled.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
`;

export const listItem = styled.ul`
  margin: 0.5rem 0;
  background: #000;
  color: #fff;
  padding: 0.5rem;
`;

export const container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #000;
  padding: 0.5rem 0;
  color: #fff;
  text-decoration: none;
`;
