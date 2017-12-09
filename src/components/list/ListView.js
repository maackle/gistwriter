import React, { Component } from 'react';
import './ListView.css';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';


export default ({posts}) => {
  const allowedTypes = [
    'paragraph', 'break', 'root', 'emphasis', 'strong',
  ]
  const items = (posts || []).map(post =>
    <article class="post-listing">

      <div>
         <img className="author-image" src={post.imageUrl} />
         <div class="info">
          <h2 className="post-title">
            <Link to={`/${ post.id }`}>{ post.description }</Link>
          </h2>
          <div className="byline">
            Posted by { post.username } at { post.timestamp }
          </div>
         </div>
      </div>
      <div>
        <ReactMarkdown source={ post.excerpt } allowedTypes={allowedTypes} unwrapDisallowed={true} />
      </div>
    </article>
  )

  return <div className="list-view">
    <div>{ items }</div>
  </div>
}