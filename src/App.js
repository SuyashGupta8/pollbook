import './App.css';
import React from 'react';

import Header from './header/Header';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Header></Header>
      );
    }else {
      return (
        <Login></Login>
      )
    }
  }
}
export default App;
