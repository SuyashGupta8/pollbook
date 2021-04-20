import './App.css';
import React from 'react';

import Header from './header/Header';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios')

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

    axios.get("http://localhost:8080/login/test", {
      // Axios looks for the `auth` option, and, if it is set, formats a
      // basic auth header for you automatically.
      auth: {
        username: 'suyash',
        password: 'suyash'
      }
    }).then((res)=>{
      console.log("res obtained", res);
    }).catch((err)=>{
      console.log("error obtained", err);
    });

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
