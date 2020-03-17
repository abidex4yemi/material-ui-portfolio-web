import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './ui/theme';
import Header from './ui/Header';

const App = () => {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

export default App;
