import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Main = styled.main`
  min-height: 100vh;
  padding: 2rem;
`;

function Layout() {
  return (
    <Main>
      <Outlet />
    </Main>
  );
}

export default Layout;
