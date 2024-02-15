import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import DigitalLibrary from './pages/DigitalLibrary';
import Admin from './pages/Admin'; // Import the new component
import PrivacyAndPolicies from './pages/PrivacyAndPolicies'; // Import the new component
import AboutMe from './pages/AboutMe'; // Import the new component
// Import other pages here

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/library" component={DigitalLibrary} />
        <Route path="/admin" component={Admin} /> {/* Add route for Admin page */}
        <Route path="/privacy-and-policies" component={PrivacyAndPolicies} /> {/* Add route for Privacy and Policies page */}
        <Route path="/about-me" component={AboutMe} /> {/* Add route for About Me page */}
        {/* Define other routes here */}
      </Switch>
    </Router>
  );
}
