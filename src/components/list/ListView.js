import React, { Component } from 'react';
import './ListView.css';


export default ({gists}) => {
  const items = (gists || []).map(gist =>
    <li>{ gist.description }</li>
  )

  return <div className="list-view">
    <h1>gists</h1>
    <ul>{ items }</ul>
  </div>
}