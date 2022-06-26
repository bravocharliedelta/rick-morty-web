import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Main = styled.main(
  ({
    theme: {
      devices: { tablet },
    },
  }) => `
  min-height: 100vh;
  padding: 1rem;
  
  @media ${tablet}: {
    padding: 2rem;
  }
`
);

function Layout() {
  return (
    <Main>
      <Outlet />
    </Main>
  );
}

export default Layout;
