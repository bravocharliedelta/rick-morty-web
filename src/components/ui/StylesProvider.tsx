import { ThemeProvider, Global, css } from '@emotion/react';

type StylesProviderProps = {
  children: React.ReactElement;
};

export interface Theme {
  colors: {
    bgPrimary: string;
    bgSecondary: string;
    boxShadow: string;
    primary: string;
    error: string;
    textPrimaryColor: string;
    textSecondaryColor: string;
  };
  font: { default: string; xl: string; l: string; m: string; s: string };
  devices: { tablet: string; laptop: string };
}

const defaultTheme: Theme = {
  colors: {
    bgPrimary: '#202329',
    bgSecondary: '#3c3e44',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
    primary: '#55cc44',
    error: '#d63d2e',
    textPrimaryColor: '#f5f5f5',
    textSecondaryColor: '#d2d2d2',
  },
  font: { default: '1rem', xl: '1.5rem;', l: '1.25', m: '1rem', s: '0.75rem' },
  devices: {
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 1024px)',
  },
};

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  html {
    box-sizing: border-box;
    color: ${defaultTheme.colors.textPrimaryColor};
    font-family: Roboto, Helvetica, sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${defaultTheme.colors.bgPrimary};
    margin: 0;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

function StylesProvider({ children }: StylesProviderProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
}

export default StylesProvider;
