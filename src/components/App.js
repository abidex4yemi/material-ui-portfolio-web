import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme/theme';
import Header from './Header.js/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/services" component={() => <div>services</div>} />
          <Route
            exact
            path="/custom-software"
            component={() => <div>custom-software</div>}
          />
          <Route
            exact
            path="/mobile-apps"
            component={() => <div>mobile-apps</div>}
          />
          <Route exact path="/websites" component={() => <div>websites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>revolution</div>}
          />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
