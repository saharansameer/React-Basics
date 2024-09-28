import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  const projects = [
    { name: 'Counter', path: '/02counter' },
    { name: 'Background Changer', path: '/04bgChanger' },
    { name: 'Password Generator', path: '/05passwordGen' },
    { name: 'Currency Converter', path: '/06currencyConv' },
    { name: 'React Router', path: '/07reactRouter' },
  ]
  return (
    <>
      <Router>
        <h1>React Beginner Projects</h1>
        <div>
          <Link to={'/02counter'}>Counter</Link>
        </div>

        <Switch>
          <Route path="/02counter" component={() => window.location.href = 'https://react-sameer.vercel.app/02counter'} />
        </Switch>
      </Router>
    </>
  )
}

export default App
