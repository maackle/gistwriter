import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ListView from './components/list/ListView';
import DetailView from './components/detail/DetailView';
import Fetcher from './components/fetcher/Fetcher';

const baseUrl = 'https://api.github.com'

const List = ({match}) => React.createElement(
  Fetcher('gists', `${baseUrl}/users/maackle/gists`)(ListView)
)

const Detail = ({match}) => React.createElement(
  Fetcher('gist', `${baseUrl}/${match.params.id}`)(DetailView)
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={List}/>
          <Route path="/:id" component={Detail}/>
        </div>
      </Router>
    );
  }
}

export default App;
