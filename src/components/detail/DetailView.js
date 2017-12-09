import React, { Component } from 'react';
import './DetailView.css';


export default ({gist}) => {
  return <div className="detail-view">
    { gist.id }
  </div>
}