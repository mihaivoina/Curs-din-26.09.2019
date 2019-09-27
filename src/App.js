import React from 'react';
// import Alert from 'react-bootstrap/Alert';
// import AlertDismissibleExample from './Alert/Alert';
import About from './About/About';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from './NavigationBar/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <NavigationBar />
      {/* <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again.
        </p>
      </Alert>
      <AlertDismissibleExample /> */}
      <Route exact path="/" component={ () => <h2>Homepage</h2> } />
      <Route  path="/about" component={ About } />

    </Router>
  )
}

export default App;
