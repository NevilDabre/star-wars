import './App.css';
import React from 'react';
import { Provider } from 'react-redux'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'

import { store } from './redux/store'
import AppBar from './components/AppBar'

import CardHolder from './components/CardHolder'

export default function App() {
  return (
    <div className="app-component">
      <AppBar />
      <Container maxWidth="sm">
        <Box my={4}>
          <Provider store={store}>
            <CardHolder />
          </Provider>
        </Box>
      </Container>
    </div>
  );
}
