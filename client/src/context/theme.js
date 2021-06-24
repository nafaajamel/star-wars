import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    primary: '#121C33',
  },
  font: {
    family: 'Poppins',
    defaultSize: '16px',
  },
};

export const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
