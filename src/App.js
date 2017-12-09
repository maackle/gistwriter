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
import {postFilename, getExcerpt} from './util';

const baseUrl = 'https://api.github.com'
const username = 'maackle'

const List = (posts) => () => <ListView posts={posts} />

const Detail = (posts=[]) => ({match}) => {
  const gistId = match.params.id
  const post = (posts || []).find(p => p.id == gistId)
  return <DetailView post={post} />
}

const App = ({fetched}) => {
  return (
    <Router>
      <div className="container">
        <h1 className="main-logo">GistWriter</h1>
        <Route exact path="/" component={List(fetched)}/>
        <Route path="/:id" component={Detail(fetched)}/>
      </div>
    </Router>
  );
}

const getter = () => {
  return fetch(`${baseUrl}/users/${username}/gists`)
    .then(r => r.json())
    .then(gists => {
      const promises = gists.map(gist => {
        const postFile = gist.files[postFilename]
        if (!postFile) {
          return null
        }
        return fetch(postFile.raw_url)
          .then(r => r.text())
          .then(content => ({
            id: gist.id,
            description: gist.description,
            username: gist.owner.login,
            imageUrl: gist.owner.avatar_url,
            timestamp: gist.created_at,
            excerpt: getExcerpt(content),
            content: content,
          }))
      }).filter(x => x)

    return Promise.all(promises)
  })
}

export default Fetcher(getter)(App)
