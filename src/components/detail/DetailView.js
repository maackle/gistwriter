import React, { Component } from 'react';
import './DetailView.css';
import ReactMarkdown from 'react-markdown';
import {Link} from 'react-router-dom';

const Content = ({post}) => {
  console.log(post)
  if (!post) {
    return <div className="loading-screen">
      <div className="inner">loading...</div>
    </div>
  }
  return <div className="detail-view">
    <h1>{ post.description }
      <div className="byline">
        Posted by { post.username } at { post.timestamp }
      </div>
    </h1>

    <div className="post-content">
      <ReactMarkdown source={ post.content } />
    </div>
  </div>
}

export default ({post}) => <div>
  <Link to="/gistwriter">&larr; back to list</Link>
  <Content post={ post } />
</div>