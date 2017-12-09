import React, { Component } from 'react';


/**
 * A higher-order component to fetch data from an API endpoint
 * @param  {function} getter      The function used to call the API endpoint
 */
export default (getter) => Wrapped => {

  const propName = 'fetched';

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
      getter().then(data => this.setState({data}))
    }

    render() {
      const passedProps = {[propName]: this.state.data}
      return <Wrapped {...passedProps} />
    }
  }

  return Fetcher;
}