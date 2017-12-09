import React, { Component } from 'react';


/**
 * A higher-order component to fetch data from an API endpoint
 * @param  {string} propName The prop name to pass to the wrapped component
 * @param  {string} url      The URL to GET
 */
export default (propName, url) => Wrapped => {

  class Fetcher extends Component {
    constructor(props) {
      super()
      this.state = {
        data: null
      }
    }

    componentWillMount() {
      this.refresh()
    }

    refresh() {
      console.log("refresh:", url)
      return fetch(url)
      .then(r => r.json())
      .then(data => this.setState({data}))
    }

    render() {
      const passedProps = {[propName]: this.state.data}
      return <Wrapped {...passedProps} />
    }
  }

  return Fetcher;
}